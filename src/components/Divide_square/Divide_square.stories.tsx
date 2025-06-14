import type { Meta, StoryObj } from '@storybook/react';
import { Divide_square } from './Divide_square';
import { Divide_squareStyles } from './Divide_square.styles';

const meta: Meta<typeof Divide_square> = {
  title: 'Components/Divide_square',
  component: Divide_square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divide_square>;

export const Default: Story = {
  args: {
    ...Divide_squareStyles,
  },
};
