import fs from 'fs';
import path from 'path';
import axios from 'axios';
import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FIGMA_FILE_KEY = 'UG3aHTf3KPLN8CxPG9VmBf';
const PAGE_NAME = 'Icons';

// Create axios instance with SSL verification disabled
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  absoluteBoundingBox?: {
    width: number;
    height: number;
  };
}

interface FigmaResponse {
  document: FigmaNode;
}

interface IconVariant {
  name: string;
  size: number;
  svgContent: string;
  nodeId: string;
}

function getBaseIconName(name: string): string {
  // First, try to find the actual icon name after any size indicators
  const parts = name.split(/Size=\d+|\d+px/);
  const baseName = parts[parts.length - 1].trim();

  // If we only have size information, use a default name
  if (!baseName) {
    return 'Icon';
  }

  // Convert to PascalCase and remove special characters
  return baseName
    .split(/[\s-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
    .replace(/[^a-zA-Z0-9]/g, '');
}

function getIconSize(name: string): number {
  const sizeMatch = name.match(/Size=(\d+)|^(\d+)px/);
  return sizeMatch ? parseInt(sizeMatch[1] || sizeMatch[2]) : 24; // Default to 24 if no size found
}

async function getFigmaFile(): Promise<FigmaResponse> {
  try {
    const response = await axiosInstance.get(`https://api.figma.com/v1/files/${FIGMA_FILE_KEY}`, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching Figma file:', error);
    throw error;
  }
}

async function getSvgUrl(nodeId: string): Promise<string> {
  try {
    const response = await axiosInstance.get(
      `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${nodeId}&format=svg`,
      {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
      }
    );
    return response.data.images[nodeId];
  } catch (error) {
    console.error('Error getting SVG URL:', error);
    throw error;
  }
}

async function downloadSvg(url: string): Promise<string> {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error downloading SVG:', error);
    throw error;
  }
}

function findIconNodes(node: FigmaNode): FigmaNode[] {
  let icons: FigmaNode[] = [];

  if (node.type === 'COMPONENT' || node.type === 'INSTANCE') {
    icons.push(node);
  }

  if (node.children) {
    node.children.forEach(child => {
      icons = icons.concat(findIconNodes(child));
    });
  }

  return icons;
}

function createIconJson(variants: IconVariant[]): any {
  return {
    name: variants[0].name,
    variants: variants.map(variant => ({
      size: variant.size,
      nodeId: variant.nodeId,
    })),
    defaultSize: 24,
  };
}

async function extractIcons() {
  try {
    console.log('Fetching Figma file...');
    const figmaFile = await getFigmaFile();

    if (!figmaFile.document.children) {
      throw new Error('No pages found in Figma file');
    }

    // Find the Icons page
    const iconsPage = figmaFile.document.children.find(page => page.name === PAGE_NAME);

    if (!iconsPage) {
      throw new Error(`Page "${PAGE_NAME}" not found in Figma file`);
    }

    console.log('Finding icon nodes...');
    const iconNodes = findIconNodes(iconsPage);
    console.log(`Found ${iconNodes.length} icon nodes`);

    // Group icons by base name
    const iconGroups = new Map<string, IconVariant[]>();

    for (const icon of iconNodes) {
      const baseName = getBaseIconName(icon.name);
      const size = getIconSize(icon.name);

      console.log(`Processing icon: ${icon.name} (Base: ${baseName}, Size: ${size})`);

      const svgUrl = await getSvgUrl(icon.id);
      const svgContent = await downloadSvg(svgUrl);

      const variant: IconVariant = {
        name: icon.name,
        size,
        svgContent,
        nodeId: icon.id,
      };

      if (!iconGroups.has(baseName)) {
        iconGroups.set(baseName, []);
      }
      iconGroups.get(baseName)?.push(variant);

      // Delay para evitar rate limit
      await new Promise(res => setTimeout(res, 500));
    }

    console.log(`Grouped into ${iconGroups.size} unique icons`);

    // Save grouped icons
    for (const [baseName, variants] of iconGroups) {
      const iconDir = path.join(process.cwd(), 'src', 'components', 'icons', baseName);

      if (!fs.existsSync(iconDir)) {
        fs.mkdirSync(iconDir, { recursive: true });
      }

      // Save the default variant (usually 24px) as the main SVG
      const defaultVariant = variants.find(v => v.size === 24) || variants[0];
      const svgPath = path.join(iconDir, `${baseName}.svg`);
      fs.writeFileSync(svgPath, defaultVariant.svgContent);

      // Save the JSON metadata
      const jsonPath = path.join(iconDir, `${baseName}.json`);
      fs.writeFileSync(jsonPath, JSON.stringify(createIconJson(variants), null, 2));

      console.log(`Saved icon group: ${baseName} (${variants.length} variants)`);
    }

    console.log('Icon extraction completed successfully!');
  } catch (error) {
    console.error('Error extracting icons:', error);
    process.exit(1);
  }
}

extractIcons();
