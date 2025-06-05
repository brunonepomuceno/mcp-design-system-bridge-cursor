const fs = require('fs');
const path = require('path');

const buttonJsonPath = path.join(__dirname, '../src/components/Button/Button.json');
const buttonTypesPath = path.join(__dirname, '../src/components/Button/Button.types.ts');
const buttonStylesPath = path.join(__dirname, '../src/components/Button/Button.styles.ts');

function generateTypes(properties) {
  let content = `// Gerado automaticamente a partir do Button.json\n`;
  content += `export interface ButtonProps {\n`;
  Object.entries(properties).forEach(([name, value]) => {
    const type = typeof value === 'string' ? 'string' : 
                typeof value === 'number' ? 'number' : 
                typeof value === 'boolean' ? 'boolean' : 'any';
    content += `  ${name}?: ${type};\n`;
  });
  content += `}\n`;
  return content;
}

function generateStyles(styles) {
  let content = `// Gerado automaticamente a partir do Button.json\n`;
  content += `export const buttonStyles = {\n`;
  Object.entries(styles).forEach(([key, value]) => {
    if (key !== 'hover') {
      content += `  ${key}: '${value}',\n`;
    }
  });
  content += `};\n\n`;
  
  if (styles.hover) {
    content += `export const buttonHoverStyles = {\n`;
    Object.entries(styles.hover).forEach(([key, value]) => {
      if (value) {
        content += `  ${key}: '${value}',\n`;
      }
    });
    content += `};\n`;
  }
  
  return content;
}

function main() {
  if (!fs.existsSync(buttonJsonPath)) {
    console.error('Button.json não encontrado!');
    process.exit(1);
  }
  const buttonJson = JSON.parse(fs.readFileSync(buttonJsonPath, 'utf-8'));
  const typesContent = generateTypes(buttonJson.properties || {});
  const stylesContent = generateStyles(buttonJson.styles || {});
  fs.writeFileSync(buttonTypesPath, typesContent);
  fs.writeFileSync(buttonStylesPath, stylesContent);
  console.log('Button.types.ts e Button.styles.ts gerados com sucesso!');
}

main(); 