import fs from 'fs';
import path from 'path';
import axios from 'axios';
import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = 'UG3aHTf3KPLN8CxPG9VmBf';

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({ rejectUnauthorized: false }),
});

async function getFigmaFile() {
  const response = await axiosInstance.get(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`, {
    headers: {
      'X-Figma-Token': FIGMA_ACCESS_TOKEN,
    },
  });
  return response.data;
}

function saveToFile(filename: string, data: any) {
  const foundationDir = path.join(process.cwd(), 'src', 'foundation');
  if (!fs.existsSync(foundationDir)) {
    fs.mkdirSync(foundationDir, { recursive: true });
  }
  const filePath = path.join(foundationDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`Saved: ${filePath}`);
}

// Função utilitária para buscar detalhes completos de um estilo pelo ID
function getStyleDetails(styleId: string, styles: any, nodes: any) {
  const style = styles[styleId];
  if (!style) return null;
  // Tenta buscar o nó correspondente para pegar propriedades
  let nodeProps = null;
  for (const nodeId in nodes) {
    const node = nodes[nodeId].document;
    if (node && node.styles) {
      if (
        node.styles.fill === styleId ||
        node.styles.text === styleId ||
        node.styles.effect === styleId
      ) {
        nodeProps = node;
        break;
      }
    }
  }
  return {
    id: styleId,
    name: style.name,
    description: style.description,
    styleType: style.style_type,
    ...(typeof nodeProps === 'object' && nodeProps !== null ? nodeProps : {}),
  };
}

function extractStyles(fileData: any) {
  const paintStyles: any[] = [];
  const textStyles: any[] = [];
  const effectStyles: any[] = [];

  // Map styles por ID para facilitar busca
  const styles = fileData.styles || {};
  const nodes = fileData.nodes || {};

  // Extrair estilos globais
  for (const styleId in styles) {
    const style = styles[styleId];
    if (style.style_type === 'FILL') {
      const details = getStyleDetails(styleId, styles, nodes);
      if (details) paintStyles.push(details);
    } else if (style.style_type === 'TEXT') {
      const details = getStyleDetails(styleId, styles, nodes);
      if (details) textStyles.push(details);
    } else if (style.style_type === 'EFFECT') {
      const details = getStyleDetails(styleId, styles, nodes);
      if (details) effectStyles.push(details);
    }
  }

  // Função recursiva para extrair estilos aplicados nos nós
  function traverseNode(node: any) {
    // Fills (Paint Styles)
    if (node.styles && node.styles.fill) {
      const details = getStyleDetails(node.styles.fill, styles, nodes);
      if (details) paintStyles.push(details);
    }
    // Text Styles
    if (node.styles && node.styles.text) {
      const details = getStyleDetails(node.styles.text, styles, nodes);
      if (details) textStyles.push(details);
    }
    // Effect Styles
    if (node.styles && node.styles.effect) {
      const details = getStyleDetails(node.styles.effect, styles, nodes);
      if (details) effectStyles.push(details);
    }
    // Recursão para filhos
    if (node.children && node.children.length > 0) {
      node.children.forEach(traverseNode);
    }
  }

  traverseNode(fileData.document);

  // Remover duplicatas por id
  function uniqueById(arr: any[]) {
    const seen = new Set();
    return arr.filter(item => {
      if (!item || !item.id) return false;
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }

  return {
    paintStyles: uniqueById(paintStyles),
    textStyles: uniqueById(textStyles),
    effectStyles: uniqueById(effectStyles),
  };
}

async function extractFigmaStyles() {
  try {
    console.log('Fetching Figma file...');
    const fileData = await getFigmaFile();
    const { paintStyles, textStyles, effectStyles } = extractStyles(fileData);

    saveToFile('paint-styles.json', paintStyles);
    saveToFile('text-styles.json', textStyles);
    saveToFile('effect-styles.json', effectStyles);

    console.log('Figma styles extraction completed!');
  } catch (error) {
    console.error('Error extracting Figma styles:', error.response?.data || error.message);
  }
}

extractFigmaStyles();
