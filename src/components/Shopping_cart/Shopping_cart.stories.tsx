import type { Meta, StoryObj } from '@storybook/react';
import { Shopping_cart } from './Shopping_cart';
import { Shopping_cartStyles } from './Shopping_cart.styles';

const meta: Meta<typeof Shopping_cart> = {
  title: 'Components/Shopping_cart',
  component: Shopping_cart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Shopping_cart>;

export const Default: Story = {
  args: {
    ...Shopping_cartStyles,
  },
};
