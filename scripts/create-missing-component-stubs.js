import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '../src/components');

function getComponentNameFromDir(dir) {
  return path.basename(dir);
}

function createStubComponent(dir, name) {
  const filePath = path.join(dir, `${name}.tsx`);
  if (!fs.existsSync(filePath)) {
    const stub = `import React from 'react';
import type { FC } from 'react';
import type { ${name}Props } from './${name}.types';

export const ${name}: FC<${name}Props> = (props) => {
  return <div>{'${name} stub'}</div>;
};
`;
    fs.writeFileSync(filePath, stub);
    console.log(`Created stub: ${filePath}`);
  }
}

fs.readdirSync(componentsDir).forEach(componentFolder => {
  const componentPath = path.join(componentsDir, componentFolder);
  if (fs.statSync(componentPath).isDirectory()) {
    const componentName = getComponentNameFromDir(componentPath);
    const tsxFile = path.join(componentPath, `${componentName}.tsx`);
    const typesFile = path.join(componentPath, `${componentName}.types.ts`);
    if (!fs.existsSync(tsxFile) && fs.existsSync(typesFile)) {
      createStubComponent(componentPath, componentName);
    }
  }
});
