import type { Meta, StoryObj } from '@storybook/react';
import { Size_32 } from './Size_32';
import { Size_32Styles } from './Size_32.styles';

const meta: Meta<typeof Size_32> = {
  title: 'Components/Size_32',
  component: Size_32,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_32>;

export const Default: Story = {
  args: {
    ...Size_32Styles,
  },
};
