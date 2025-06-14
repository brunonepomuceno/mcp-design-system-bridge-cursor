import type { Meta, StoryObj } from '@storybook/react';
import { Coffee } from './Coffee';
import { CoffeeStyles } from './Coffee.styles';

const meta: Meta<typeof Coffee> = {
  title: 'Components/Coffee',
  component: Coffee,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Coffee>;

export const Default: Story = {
  args: {
    ...CoffeeStyles,
  },
};
