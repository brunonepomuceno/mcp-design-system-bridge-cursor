import fs from 'fs';
import path from 'path';

function toSnakeCase(str: string) {
  return str
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
}

function fixTypesFile(filePath: string) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Match lines like:   Some, Value Type: any;
  content = content.replace(/([\w\s,-]+):/g, (match, p1) => {
    const fixed = toSnakeCase(p1);
    return `${fixed}:`;
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Corrigido: ${filePath}`);
}

function walk(dir: string) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.types.ts')) {
      fixTypesFile(fullPath);
    }
  });
}

walk(path.join(process.cwd(), 'src/components'));
