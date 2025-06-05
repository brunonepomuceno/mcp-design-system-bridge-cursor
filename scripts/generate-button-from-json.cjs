const fs = require('fs');
const path = require('path');

const buttonJsonPath = path.join(__dirname, '../src/components/Button/Button.json');
const buttonTypesPath = path.join(__dirname, '../src/components/Button/Button.types.ts');
const buttonStylesPath = path.join(__dirname, '../src/components/Button/Button.styles.ts');

function generateTypes(props) {
  let content = `// Gerado automaticamente a partir do Button.json\n`;
  content += `export interface ButtonProps {\n`;
  props.forEach(prop => {
    content += `  ${prop.name}${prop.type.includes('undefined') ? '?' : ''}: ${prop.type};\n`;
  });
  content += `}\n`;
  return content;
}

function generateStyles(styles) {
  let content = `// Gerado automaticamente a partir do Button.json\n`;
  content += `export const buttonVariants = {\n`;
  Object.entries(styles).forEach(([variant, style]) => {
    content += `  ${variant}: '${style}',\n`;
  });
  content += `};\n`;
  return content;
}

function main() {
  if (!fs.existsSync(buttonJsonPath)) {
    console.error('Button.json não encontrado!');
    process.exit(1);
  }
  const buttonJson = JSON.parse(fs.readFileSync(buttonJsonPath, 'utf-8'));
  const typesContent = generateTypes(buttonJson.props);
  const stylesContent = generateStyles(buttonJson.styles);
  fs.writeFileSync(buttonTypesPath, typesContent);
  fs.writeFileSync(buttonStylesPath, stylesContent);
  console.log('Button.types.ts e Button.styles.ts gerados com sucesso!');
}

main(); 