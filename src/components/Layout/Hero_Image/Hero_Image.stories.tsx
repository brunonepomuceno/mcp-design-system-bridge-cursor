import type { Meta, StoryObj } from '@storybook/react';
import { Hero_Image } from './Hero_Image';
import { Hero_ImageStyles } from './Hero_Image.styles';

const meta: Meta<typeof Hero_Image> = {
  title: 'Components/Hero_Image',
  component: Hero_Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero_Image>;

export const Default: Story = {
  args: {
    ...Hero_ImageStyles,
  },
};
