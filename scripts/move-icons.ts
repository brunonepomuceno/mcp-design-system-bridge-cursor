import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ICON_COMPONENTS = [
  'Activity',
  'File',
  'Folder',
  'Navigation',
  'Zoom_out',
  'Direction_Left',
  'Direction_Right',
  'Direction_Top',
  'Direction_Bottom',
  'Figma',
];

const sourceDir = path.join(__dirname, '../src/components');
const targetDir = path.join(__dirname, '../src/components/icons');

// Ensure target directory exists
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Move each icon component
ICON_COMPONENTS.forEach(iconName => {
  const sourcePath = path.join(sourceDir, iconName);
  const targetPath = path.join(targetDir, iconName);

  if (fs.existsSync(sourcePath)) {
    // Create target directory if it doesn't exist
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
    }

    // Move all files from source to target
    const files = fs.readdirSync(sourcePath);
    files.forEach(file => {
      const sourceFile = path.join(sourcePath, file);
      const targetFile = path.join(targetPath, file);
      fs.renameSync(sourceFile, targetFile);
    });

    // Remove empty source directory
    fs.rmdirSync(sourcePath);
    console.log(`Moved ${iconName} to icons directory`);
  } else {
    console.log(`Component ${iconName} not found`);
  }
});
