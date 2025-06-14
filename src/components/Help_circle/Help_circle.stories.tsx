import type { Meta, StoryObj } from '@storybook/react';
import { Help_circle } from './Help_circle';
import { Help_circleStyles } from './Help_circle.styles';

const meta: Meta<typeof Help_circle> = {
  title: 'Components/Help_circle',
  component: Help_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Help_circle>;

export const Default: Story = {
  args: {
    ...Help_circleStyles,
  },
};
