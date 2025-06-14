import type { Meta, StoryObj } from '@storybook/react';
import { Type_Initial_Size_Small_Shape_Square } from './Type_Initial_Size_Small_Shape_Square';
import { Type_Initial_Size_Small_Shape_SquareStyles } from './Type_Initial_Size_Small_Shape_Square.styles';

const meta: Meta<typeof Type_Initial_Size_Small_Shape_Square> = {
  title: 'Components/Type_Initial_Size_Small_Shape_Square',
  component: Type_Initial_Size_Small_Shape_Square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type_Initial_Size_Small_Shape_Square>;

export const Default: Story = {
  args: {
    ...Type_Initial_Size_Small_Shape_SquareStyles,
  },
};
