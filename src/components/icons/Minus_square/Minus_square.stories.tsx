import type { Meta, StoryObj } from '@storybook/react';
import { Minus_square } from './Minus_square';
import { Minus_squareStyles } from './Minus_square.styles';

const meta: Meta<typeof Minus_square> = {
  title: 'Components/Minus_square',
  component: Minus_square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Minus_square>;

export const Default: Story = {
  args: {
    ...Minus_squareStyles,
  },
};
