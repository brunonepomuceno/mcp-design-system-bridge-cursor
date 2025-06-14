import type { Meta, StoryObj } from '@storybook/react';
import { X_square } from './X_square';
import { X_squareStyles } from './X_square.styles';

const meta: Meta<typeof X_square> = {
  title: 'Components/X_square',
  component: X_square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof X_square>;

export const Default: Story = {
  args: {
    ...X_squareStyles,
  },
};
