import type { Meta, StoryObj } from '@storybook/react';
import { File_plus } from './File_plus';
import { File_plusStyles } from './File_plus.styles';

const meta: Meta<typeof File_plus> = {
  title: 'Components/File_plus',
  component: File_plus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof File_plus>;

export const Default: Story = {
  args: {
    ...File_plusStyles,
  },
};
