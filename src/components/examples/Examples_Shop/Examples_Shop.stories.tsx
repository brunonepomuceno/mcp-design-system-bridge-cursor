import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Shop } from './Examples_Shop';
import { Examples_ShopStyles } from './Examples_Shop.styles';

const meta: Meta<typeof Examples_Shop> = {
  title: 'Components/Examples_Shop',
  component: Examples_Shop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Shop>;

export const Default: Story = {
  args: {
    ...Examples_ShopStyles,
  },
};
