import type { Meta, StoryObj } from '@storybook/react';
import { Folder_plus } from './Folder_plus';
import { Folder_plusStyles } from './Folder_plus.styles';

const meta: Meta<typeof Folder_plus> = {
  title: 'Components/Folder_plus',
  component: Folder_plus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Folder_plus>;

export const Default: Story = {
  args: {
    ...Folder_plusStyles,
  },
};
