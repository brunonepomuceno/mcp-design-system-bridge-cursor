import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';
import { ImageStyles } from './Image.styles';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    ...ImageStyles,
  },
};
