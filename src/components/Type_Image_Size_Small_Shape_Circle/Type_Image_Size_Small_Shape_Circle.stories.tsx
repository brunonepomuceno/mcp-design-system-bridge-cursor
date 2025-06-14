import type { Meta, StoryObj } from '@storybook/react';
import { Type_Image_Size_Small_Shape_Circle } from './Type_Image_Size_Small_Shape_Circle';
import { Type_Image_Size_Small_Shape_CircleStyles } from './Type_Image_Size_Small_Shape_Circle.styles';

const meta: Meta<typeof Type_Image_Size_Small_Shape_Circle> = {
  title: 'Components/Type_Image_Size_Small_Shape_Circle',
  component: Type_Image_Size_Small_Shape_Circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type_Image_Size_Small_Shape_Circle>;

export const Default: Story = {
  args: {
    ...Type_Image_Size_Small_Shape_CircleStyles,
  },
};
