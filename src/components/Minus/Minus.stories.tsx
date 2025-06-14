import type { Meta, StoryObj } from '@storybook/react';
import { Minus } from './Minus';
import { MinusStyles } from './Minus.styles';

const meta: Meta<typeof Minus> = {
  title: 'Components/Minus',
  component: Minus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Minus>;

export const Default: Story = {
  args: {
    ...MinusStyles,
  },
};
