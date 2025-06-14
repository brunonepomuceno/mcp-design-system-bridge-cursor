import type { Meta, StoryObj } from '@storybook/react';
import { Text_Price } from './Text_Price';
import { Text_PriceStyles } from './Text_Price.styles';

const meta: Meta<typeof Text_Price> = {
  title: 'Components/Text_Price',
  component: Text_Price,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Price>;

export const Default: Story = {
  args: {
    ...Text_PriceStyles,
  },
};
