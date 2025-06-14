import type { Meta, StoryObj } from '@storybook/react';
import { Card_Grid_Image } from './Card_Grid_Image';
import { Card_Grid_ImageStyles } from './Card_Grid_Image.styles';

const meta: Meta<typeof Card_Grid_Image> = {
  title: 'Components/Card_Grid_Image',
  component: Card_Grid_Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card_Grid_Image>;

export const Default: Story = {
  args: {
    ...Card_Grid_ImageStyles,
  },
};
