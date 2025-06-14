import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = 'UG3aHTf3KPLN8CxPG9VmBf';

interface Component {
  id: string;
  name: string;
  description: string;
  type: string;
  properties: Record<string, { type: string; description: string }>;
  styles: Record<string, any>;
}

interface Styles {
  components: Component[];
  variables: any[];
  textStyles: any[];
  colorStyles: any[];
  effectStyles: any[];
}

interface FigmaVariable {
  id: string;
  name: string;
  type: string;
  value: any;
}

function sanitizeName(name: string): string {
  // Remove caracteres especiais e espaços, mantendo apenas letras, números e underscores
  return name
    .replace(/[^a-zA-Z0-9_]/g, '_')
    .replace(/_+/g, '_') // Remove underscores duplicados
    .replace(/^_|_$/g, ''); // Remove underscores no início e fim
}

function generateTypesFile(component: Component): string {
  const properties = Object.entries(component.properties || {})
    .map(([key, value]) => {
      const type =
        typeof value === 'string'
          ? 'string'
          : typeof value === 'number'
            ? 'number'
            : typeof value === 'boolean'
              ? 'boolean'
              : 'any';
      return `  ${key}: ${type};`;
    })
    .join('\n');

  return `// Generated from Figma
export interface ${component.name}Props {
${properties}
}
`;
}

function generateStylesFile(component: Component): string {
  const styles = Object.entries(component.styles || {})
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        if ('r' in value && 'g' in value && 'b' in value) {
          const { r, g, b, a = 1 } = value;
          return `  ${key}: 'rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})';`;
        }
        return `  ${key}: ${JSON.stringify(value)};`;
      }
      return `  ${key}: '${value}';`;
    })
    .join('\n');

  return `export const ${component.name}Styles = {
${styles}
};`;
}

function generateStoriesFile(componentName: string, variants: any[] = []): string {
  const stories = variants
    .map((variant, index) => {
      const variantName = variant.name || `Variant${index + 1}`;
      return `
export const ${variantName}: Story = {
  args: {
    ...${componentName}Styles,
    ...${JSON.stringify(variant.properties, null, 2)}
  }
};`;
    })
    .join('\n');

  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';
import { ${componentName}Styles } from './${componentName}.styles';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

${stories}`;
}

function generateIndexFile(component: Component): string {
  return `// Generated from Figma
export { ${component.name} } from './${component.name}';
export type { ${component.name}Props } from './${component.name}.types';
`;
}

function extractStyles(node: any, styles: Styles) {
  if (!node) return;

  // Extract components
  if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
    const component: Component = {
      id: node.id,
      name: sanitizeName(node.name),
      description: node.description,
      type: node.type,
      properties: {},
      styles: {},
    };

    // Extract component properties
    if (node.children) {
      node.children.forEach((child: any) => {
        if (child.type === 'INSTANCE') {
          const variantName = child.name.split('=')[1]?.trim();
          if (variantName) {
            component.properties[variantName] = {
              type: 'string',
              description: `${variantName} variant of ${node.name}`,
            };
          }
        }
      });
    }

    // Extract component styles
    if (node.fills && node.fills.length > 0) {
      const fill = node.fills[0];
      if (fill.type === 'SOLID') {
        component.styles.backgroundColor = fill.color;
        if (fill.opacity !== undefined) {
          component.styles.backgroundColor.a = fill.opacity;
        }
      }
    }
    if (node.strokes && node.strokes.length > 0) {
      const stroke = node.strokes[0];
      if (stroke.type === 'SOLID') {
        component.styles.borderColor = stroke.color;
        if (stroke.opacity !== undefined) {
          component.styles.borderColor.a = stroke.opacity;
        }
      }
      component.styles.borderWidth = node.strokeWeight;
    }
    if (node.cornerRadius !== undefined) {
      component.styles.borderRadius = node.cornerRadius;
    }
    if (node.paddingLeft !== undefined) {
      component.styles.padding = `${node.paddingTop}px ${node.paddingRight}px ${node.paddingBottom}px ${node.paddingLeft}px`;
    }
    if (node.fontSize !== undefined) {
      component.styles.fontSize = `${node.fontSize}px`;
    }
    if (node.fontWeight !== undefined) {
      component.styles.fontWeight = node.fontWeight;
    }
    if (node.textAlignHorizontal !== undefined) {
      component.styles.textAlign = node.textAlignHorizontal.toLowerCase();
    }

    // Extract variants from component set
    if (node.type === 'COMPONENT_SET' && node.children) {
      node.children.forEach((child: any) => {
        if (child.type === 'COMPONENT') {
          const variantName = child.name.split('=')[1]?.trim();
          if (variantName) {
            component.properties[variantName] = {
              type: 'string',
              description: `${variantName} variant of ${node.name}`,
            };
          }
        }
      });
    }

    // Only add if not already exists (avoid duplicates)
    if (!styles.components.some(c => c.name === component.name)) {
      styles.components.push(component);
    }
  }

  // Extract variables
  if (node.boundVariables) {
    Object.entries(node.boundVariables).forEach(([property, variable]) => {
      const figmaVar = variable as FigmaVariable;
      styles.variables.push({
        id: figmaVar.id,
        name: figmaVar.name,
        type: figmaVar.type,
        value: figmaVar.value,
      });
    });
  }

  // Extract text styles
  if (node.style && node.style.type === 'TEXT') {
    styles.textStyles.push({
      id: node.style.id,
      name: node.style.name,
      description: node.style.description,
      properties: {
        fontFamily: node.style.fontFamily,
        fontWeight: node.style.fontWeight,
        fontSize: node.style.fontSize,
        lineHeight: node.style.lineHeight,
        letterSpacing: node.style.letterSpacing,
        textAlign: node.style.textAlign,
        textCase: node.style.textCase,
      },
    });
  }

  // Extract color styles
  if (node.fills && node.fills.some((fill: any) => fill.type === 'SOLID')) {
    node.fills.forEach((fill: any) => {
      if (fill.type === 'SOLID' && fill.styleId) {
        styles.colorStyles.push({
          id: fill.styleId,
          name: fill.style?.name,
          description: fill.style?.description,
          color: {
            r: fill.color.r,
            g: fill.color.g,
            b: fill.color.b,
            a: fill.opacity,
          },
        });
      }
    });
  }

  // Extract effect styles
  if (node.effects && node.effects.length > 0) {
    node.effects.forEach((effect: any) => {
      if (effect.styleId) {
        styles.effectStyles.push({
          id: effect.styleId,
          name: effect.style?.name,
          description: effect.style?.description,
          type: effect.type,
          properties: {
            color: effect.color,
            offset: effect.offset,
            radius: effect.radius,
            spread: effect.spread,
            visible: effect.visible,
            blendMode: effect.blendMode,
          },
        });
      }
    });
  }

  // Recursively process children
  if (node.children) {
    node.children.forEach((child: any) => extractStyles(child, styles));
  }
}

async function extractFigmaStyles() {
  try {
    // Get file data
    const fileResponse = await axios.get(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    const fileData = fileResponse.data;
    const styles: Styles = {
      components: [],
      variables: [],
      textStyles: [],
      colorStyles: [],
      effectStyles: [],
    };

    // 1. Extrair estilos globais do arquivo Figma (fileData.styles)
    if (fileData.styles) {
      Object.entries(fileData.styles).forEach(([id, style]: [string, any]) => {
        if (style.style_type === 'TEXT') {
          styles.textStyles.push({
            id,
            name: style.name,
            description: style.description,
            styleType: style.style_type,
          });
        } else if (style.style_type === 'FILL') {
          styles.colorStyles.push({
            id,
            name: style.name,
            description: style.description,
            styleType: style.style_type,
          });
        } else if (style.style_type === 'EFFECT') {
          styles.effectStyles.push({
            id,
            name: style.name,
            description: style.description,
            styleType: style.style_type,
          });
        }
      });
    }

    // 2. Buscar estilos globais detalhados do endpoint /v1/files/:file_key/styles
    try {
      const stylesResponse = await axios.get(`https://api.figma.com/v1/files/${FILE_KEY}/styles`, {
        headers: {
          'X-Figma-Token': FIGMA_ACCESS_TOKEN,
        },
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      });
      const remoteStyles = stylesResponse.data.meta?.styles || [];
      remoteStyles.forEach((style: any) => {
        if (style.style_type === 'TEXT') {
          styles.textStyles.push(style);
        } else if (style.style_type === 'FILL') {
          styles.colorStyles.push(style);
        } else if (style.style_type === 'EFFECT') {
          styles.effectStyles.push(style);
        }
      });
    } catch (err) {
      console.warn(
        'Não foi possível buscar estilos detalhados do endpoint /styles:',
        err instanceof Error ? err.message : String(err)
      );
    }

    // 3. Continuar extraindo dos nós do documento
    extractStyles(fileData.document, styles);

    // Create components directory if it doesn't exist
    const componentsDir = path.join(__dirname, '../src/components');
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
    }

    // Save extracted styles to JSON file
    const outputPath = path.join(__dirname, '../src/tokens/figma-styles.json');
    fs.writeFileSync(outputPath, JSON.stringify(styles, null, 2));

    // Generate component files for each component
    styles.components.forEach(component => {
      const componentDir = path.join(componentsDir, component.name);
      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir, { recursive: true });
      }

      // Generate component files
      const files = {
        [`${component.name}.types.ts`]: generateTypesFile(component),
        [`${component.name}.styles.ts`]: generateStylesFile(component),
        [`${component.name}.stories.tsx`]: generateStoriesFile(
          component.name,
          styles.components.filter(c => c.name === component.name)
        ),
        [`${component.name}.json`]: JSON.stringify(component, null, 2),
        'index.ts': generateIndexFile(component),
      };

      Object.entries(files).forEach(([filename, content]) => {
        fs.writeFileSync(path.join(componentDir, filename), content);
      });
    });

    console.log('Styles extracted successfully!');
    console.log(`Found:`);
    console.log(`- ${styles.components.length} components`);
    console.log(`- ${styles.variables.length} variables`);
    console.log(`- ${styles.textStyles.length} text styles`);
    console.log(`- ${styles.colorStyles.length} color styles`);
    console.log(`- ${styles.effectStyles.length} effect styles`);
  } catch (error) {
    console.error(
      'Error extracting Figma styles:',
      error instanceof Error ? error.message : String(error)
    );
    process.exit(1);
  }
}

// Run the extraction
if (!FIGMA_ACCESS_TOKEN) {
  console.error('Please set FIGMA_ACCESS_TOKEN environment variable');
  process.exit(1);
}

extractFigmaStyles();
