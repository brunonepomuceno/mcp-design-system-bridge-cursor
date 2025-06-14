import type { Meta, StoryObj } from '@storybook/react';
import { Folder } from './Folder';
import { FolderStyles } from './Folder.styles';

const meta: Meta<typeof Folder> = {
  title: 'Components/Folder',
  component: Folder,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Folder>;

export const Default: Story = {
  args: {
    ...FolderStyles,
  },
};
