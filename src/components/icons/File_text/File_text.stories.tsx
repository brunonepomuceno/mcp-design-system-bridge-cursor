import type { Meta, StoryObj } from '@storybook/react';
import { File_text } from './File_text';
import { File_textStyles } from './File_text.styles';

const meta: Meta<typeof File_text> = {
  title: 'Components/File_text',
  component: File_text,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof File_text>;

export const Default: Story = {
  args: {
    ...File_textStyles,
  },
};
