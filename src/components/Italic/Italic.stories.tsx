import type { Meta, StoryObj } from '@storybook/react';
import { Italic } from './Italic';
import { ItalicStyles } from './Italic.styles';

const meta: Meta<typeof Italic> = {
  title: 'Components/Italic',
  component: Italic,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Italic>;

export const Default: Story = {
  args: {
    ...ItalicStyles,
  },
};
