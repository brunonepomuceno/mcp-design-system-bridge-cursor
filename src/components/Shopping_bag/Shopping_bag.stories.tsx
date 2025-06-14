import type { Meta, StoryObj } from '@storybook/react';
import { Shopping_bag } from './Shopping_bag';
import { Shopping_bagStyles } from './Shopping_bag.styles';

const meta: Meta<typeof Shopping_bag> = {
  title: 'Components/Shopping_bag',
  component: Shopping_bag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Shopping_bag>;

export const Default: Story = {
  args: {
    ...Shopping_bagStyles,
  },
};
