const fs = require('fs');
const path = require('path');

const buttonTypesPath = path.join(__dirname, '../src/components/Button/Button.types.ts');
const buttonStylesPath = path.join(__dirname, '../src/components/Button/Button.styles.ts');
const buttonJsonPath = path.join(__dirname, '../src/components/Button/Button.json');

function extractProps() {
  const typesContent = fs.readFileSync(buttonTypesPath, 'utf-8');
  const props = [];
  const propRegex = /\s*(\w+)\??: ([^;]+);(?:\s*\/\*\*([\s\S]*?)\*\/)?/g;
  let match;
  while ((match = propRegex.exec(typesContent)) !== null) {
    const name = match[1];
    const type = match[2].replace(/\n/g, '').trim();
    props.push({ name, type });
  }
  return props;
}

function extractStyles() {
  const stylesContent = fs.readFileSync(buttonStylesPath, 'utf-8');
  const styles = {};
  const variantRegex = /variant:\s*{([\s\S]*?)},/m;
  const match = stylesContent.match(variantRegex);
  if (match) {
    const variantsBlock = match[1];
    const styleRegex = /(\w+):\s*'([^']+)'/g;
    let styleMatch;
    while ((styleMatch = styleRegex.exec(variantsBlock)) !== null) {
      styles[styleMatch[1]] = styleMatch[2];
    }
  }
  return styles;
}

function main() {
  const props = extractProps();
  const styles = extractStyles();
  const buttonJson = {
    name: 'Button',
    description: 'Botão reutilizável do design system',
    props,
    styles
  };
  fs.writeFileSync(buttonJsonPath, JSON.stringify(buttonJson, null, 2));
  console.log('Button.json gerado com sucesso!');
}

main(); 