import type { Meta, StoryObj } from '@storybook/react';
import { Pen_tool } from './Pen_tool';
import { Pen_toolStyles } from './Pen_tool.styles';

const meta: Meta<typeof Pen_tool> = {
  title: 'Components/Pen_tool',
  component: Pen_tool,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pen_tool>;

export const Default: Story = {
  args: {
    ...Pen_toolStyles,
  },
};
