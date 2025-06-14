import type { Meta, StoryObj } from '@storybook/react';
import { Square } from './Square';
import { SquareStyles } from './Square.styles';

const meta: Meta<typeof Square> = {
  title: 'Components/Square',
  component: Square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Square>;

export const Default: Story = {
  args: {
    ...SquareStyles,
  },
};
