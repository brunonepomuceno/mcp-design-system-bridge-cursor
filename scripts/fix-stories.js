import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '../src/components');

// Find all story files
const storyFiles = await glob('**/*.stories.tsx', { cwd: componentsDir });

for (const storyFile of storyFiles) {
  const fullPath = path.join(componentsDir, storyFile);
  const componentName = path.basename(storyFile, '.stories.tsx');
  const componentDir = path.dirname(fullPath);

  // Read the current story file
  let content = fs.readFileSync(fullPath, 'utf8');

  // Standardize the story content
  const newContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';
import { ${componentName}Styles } from './${componentName}.styles';

const meta: Meta<typeof ${componentName}> = {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Default: Story = {
  args: {
    ...${componentName}Styles,
  },
};
`;

  // Write the standardized content back to the file
  fs.writeFileSync(fullPath, newContent);
  console.log(`Fixed ${storyFile}`);
}
