import type { Meta, StoryObj } from '@storybook/react';
import { Minus_circle } from './Minus_circle';
import { Minus_circleStyles } from './Minus_circle.styles';

const meta: Meta<typeof Minus_circle> = {
  title: 'Components/Minus_circle',
  component: Minus_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Minus_circle>;

export const Default: Story = {
  args: {
    ...Minus_circleStyles,
  },
};
