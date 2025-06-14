import type { Meta, StoryObj } from '@storybook/react';
import { File } from './File';
import { FileStyles } from './File.styles';

const meta: Meta<typeof File> = {
  title: 'Components/File',
  component: File,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof File>;

export const Default: Story = {
  args: {
    ...FileStyles,
  },
};
