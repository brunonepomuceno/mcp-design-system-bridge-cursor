import type { Meta, StoryObj } from '@storybook/react';
import { File_minus } from './File_minus';
import { File_minusStyles } from './File_minus.styles';

const meta: Meta<typeof File_minus> = {
  title: 'Components/File_minus',
  component: File_minus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof File_minus>;

export const Default: Story = {
  args: {
    ...File_minusStyles,
  },
};
