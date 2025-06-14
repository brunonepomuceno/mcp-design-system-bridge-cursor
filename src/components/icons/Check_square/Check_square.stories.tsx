import type { Meta, StoryObj } from '@storybook/react';
import { Check_square } from './Check_square';
import { Check_squareStyles } from './Check_square.styles';

const meta: Meta<typeof Check_square> = {
  title: 'Components/Check_square',
  component: Check_square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Check_square>;

export const Default: Story = {
  args: {
    ...Check_squareStyles,
  },
};
