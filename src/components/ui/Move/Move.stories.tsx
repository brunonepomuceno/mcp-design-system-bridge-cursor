import type { Meta, StoryObj } from '@storybook/react';
import { Move } from './Move';
import { MoveStyles } from './Move.styles';

const meta: Meta<typeof Move> = {
  title: 'Components/Move',
  component: Move,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Move>;

export const Default: Story = {
  args: {
    ...MoveStyles,
  },
};
