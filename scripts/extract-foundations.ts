import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as fs from 'fs';
import * as path from 'path';
import { FigmaService } from '../src/services/figma.service.ts';
import { ConfigService } from '../src/services/config.service.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const foundationsDir = path.join(__dirname, '../src/foundations');

// Ensure foundations directories exist
const dirs = [
  'colors/palette',
  'colors/semantic',
  'colors/themes',
  'typography/scale',
  'typography/weights',
  'typography/families',
  'spacing/scale',
  'spacing/layout',
  'elevation/shadows',
  'elevation/layers',
  'motion/timing',
  'motion/easing',
  'motion/transitions',
];

dirs.forEach(dir => {
  const fullPath = path.join(foundationsDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

async function extractFoundations() {
  const config = new ConfigService();
  const figmaService = new FigmaService(config);

  try {
    // Extract colors
    const colors = await figmaService.extractColors();
    fs.writeFileSync(
      path.join(foundationsDir, 'colors/palette/colors.json'),
      JSON.stringify(colors, null, 2)
    );

    // Extract typography
    const typography = await figmaService.extractTypography();
    fs.writeFileSync(
      path.join(foundationsDir, 'typography/scale/typography.json'),
      JSON.stringify(typography, null, 2)
    );

    // Extract spacing
    const spacing = await figmaService.extractSpacing();
    fs.writeFileSync(
      path.join(foundationsDir, 'spacing/scale/spacing.json'),
      JSON.stringify(spacing, null, 2)
    );

    // Extract elevation
    const elevation = await figmaService.extractElevation();
    fs.writeFileSync(
      path.join(foundationsDir, 'elevation/shadows/shadows.json'),
      JSON.stringify(elevation, null, 2)
    );

    // Extract motion
    const motion = await figmaService.extractMotion();
    fs.writeFileSync(
      path.join(foundationsDir, 'motion/timing/timing.json'),
      JSON.stringify(motion, null, 2)
    );

    console.log('Foundations extracted successfully!');
  } catch (error) {
    console.error('Error extracting foundations:', error);
  }
}

extractFoundations();
