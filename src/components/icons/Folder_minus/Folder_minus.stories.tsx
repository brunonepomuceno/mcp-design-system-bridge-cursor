import type { Meta, StoryObj } from '@storybook/react';
import { Folder_minus } from './Folder_minus';
import { Folder_minusStyles } from './Folder_minus.styles';

const meta: Meta<typeof Folder_minus> = {
  title: 'Components/Folder_minus',
  component: Folder_minus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Folder_minus>;

export const Default: Story = {
  args: {
    ...Folder_minusStyles,
  },
};
