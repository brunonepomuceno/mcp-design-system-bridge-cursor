import type { Meta, StoryObj } from '@storybook/react';
import { Plus_square } from './Plus_square';
import { Plus_squareStyles } from './Plus_square.styles';

const meta: Meta<typeof Plus_square> = {
  title: 'Components/Plus_square',
  component: Plus_square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Plus_square>;

export const Default: Story = {
  args: {
    ...Plus_squareStyles,
  },
};
