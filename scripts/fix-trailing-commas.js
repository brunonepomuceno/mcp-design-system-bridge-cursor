import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '../src/components');

function fixTrailingCommas(directory) {
  const items = fs.readdirSync(directory);

  items.forEach(item => {
    const fullPath = path.join(directory, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      fixTrailingCommas(fullPath);
    } else if (item.endsWith('.styles.ts')) {
      // Fix trailing commas in style files
      let content = fs.readFileSync(fullPath, 'utf8');
      // Remove trailing commas before } or ]
      content = content.replace(/,\s*([}\]])/g, '$1');
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed trailing comma in ${fullPath}`);
    }
  });
}

fixTrailingCommas(componentsDir);
