import type { Meta, StoryObj } from '@storybook/react';
import { X_circle } from './X_circle';
import { X_circleStyles } from './X_circle.styles';

const meta: Meta<typeof X_circle> = {
  title: 'Components/X_circle',
  component: X_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof X_circle>;

export const Default: Story = {
  args: {
    ...X_circleStyles,
  },
};
