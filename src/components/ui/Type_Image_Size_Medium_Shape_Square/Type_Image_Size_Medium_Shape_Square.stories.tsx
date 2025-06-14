import type { Meta, StoryObj } from '@storybook/react';
import { Type_Image_Size_Medium_Shape_Square } from './Type_Image_Size_Medium_Shape_Square';
import { Type_Image_Size_Medium_Shape_SquareStyles } from './Type_Image_Size_Medium_Shape_Square.styles';

const meta: Meta<typeof Type_Image_Size_Medium_Shape_Square> = {
  title: 'Components/Type_Image_Size_Medium_Shape_Square',
  component: Type_Image_Size_Medium_Shape_Square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type_Image_Size_Medium_Shape_Square>;

export const Default: Story = {
  args: {
    ...Type_Image_Size_Medium_Shape_SquareStyles,
  },
};
