import type { Meta, StoryObj } from '@storybook/react';
import { Scissors } from './Scissors';
import { ScissorsStyles } from './Scissors.styles';

const meta: Meta<typeof Scissors> = {
  title: 'Components/Scissors',
  component: Scissors,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Scissors>;

export const Default: Story = {
  args: {
    ...ScissorsStyles,
  },
};
