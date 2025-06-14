const fs = require('fs');
const path = require('path');
const axios = require('axios');

const FIGMA_ACCESS_TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = 'UG3aHTf3KPLN8CxPG9VmBf';

async function extractFigmaStyles() {
  try {
    // Get file data
    const fileResponse = await axios.get(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: {
        'X-Figma-Token': FIGMA_ACCESS_TOKEN,
      },
    });

    const fileData = fileResponse.data;
    const styles = {
      components: [],
      variables: [],
      textStyles: [],
      colorStyles: [],
      effectStyles: [],
    };

    // Extract styles recursively
    function extractStyles(node) {
      if (!node) return;

      // Extract components
      if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
        const component = {
          id: node.id,
          name: node.name,
          description: node.description,
          type: node.type,
          properties: {},
          styles: {},
        };

        // Extract component properties
        if (node.children) {
          node.children.forEach(child => {
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
        if (node.fills) {
          component.styles.backgroundColor = node.fills[0]?.color;
        }
        if (node.strokes) {
          component.styles.borderColor = node.strokes[0]?.color;
          component.styles.borderWidth = node.strokeWeight;
        }
        if (node.cornerRadius) {
          component.styles.borderRadius = node.cornerRadius;
        }
        if (node.paddingLeft) {
          component.styles.padding = `${node.paddingTop}px ${node.paddingRight}px ${node.paddingBottom}px ${node.paddingLeft}px`;
        }
        if (node.fontSize) {
          component.styles.fontSize = `${node.fontSize}px`;
        }
        if (node.fontWeight) {
          component.styles.fontWeight = node.fontWeight;
        }
        if (node.textAlignHorizontal) {
          component.styles.textAlign = node.textAlignHorizontal.toLowerCase();
        }

        styles.components.push(component);
      }

      // Extract variables
      if (node.boundVariables) {
        Object.entries(node.boundVariables).forEach(([property, variable]) => {
          styles.variables.push({
            id: variable.id,
            name: variable.name,
            type: variable.type,
            value: variable.value,
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
      if (node.fills && node.fills.some(fill => fill.type === 'SOLID')) {
        node.fills.forEach(fill => {
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
        node.effects.forEach(effect => {
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
        node.children.forEach(child => extractStyles(child));
      }
    }

    // Start extraction from the root node
    extractStyles(fileData.document);

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
        [`${component.name}.stories.tsx`]: generateStoriesFile(component),
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
    console.error('Error extracting Figma styles:', error.message);
    process.exit(1);
  }
}

function generateTypesFile(component) {
  const properties = Object.entries(component.properties)
    .map(([name, prop]) => `  ${name}: ${prop.type};`)
    .join('\n');

  return `// Generated from Figma
export interface ${component.name}Props {
${properties}
}
`;
}

function generateStylesFile(component) {
  const styles = Object.entries(component.styles)
    .map(([key, value]) => `  ${key}: '${value}',`)
    .join('\n');

  return `// Generated from Figma
export const ${component.name}Styles = {
${styles}
};
`;
}

function generateStoriesFile(component) {
  const variants = Object.keys(component.properties);
  const stories = variants
    .map(
      variant => `
export const ${variant} = {
  args: {
    ${variant}: '${variant}',
  },
};
`
    )
    .join('\n');

  return `// Generated from Figma
import type { Meta, StoryObj } from '@storybook/react';
import { ${component.name} } from './index';

const meta: Meta<typeof ${component.name}> = {
  title: 'Components/${component.name}',
  component: ${component.name},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${component.name}>;

${stories}
`;
}

function generateIndexFile(component) {
  return `// Generated from Figma
export { ${component.name} } from './${component.name}';
export type { ${component.name}Props } from './${component.name}.types';
`;
}

// Run the extraction
if (!FIGMA_ACCESS_TOKEN) {
  console.error('Please set FIGMA_ACCESS_TOKEN environment variable');
  process.exit(1);
}

extractFigmaStyles();
