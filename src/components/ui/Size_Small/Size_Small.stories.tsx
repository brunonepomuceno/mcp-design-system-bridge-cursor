import type { Meta, StoryObj } from '@storybook/react';
import { Size_Small } from './Size_Small';
import { Size_SmallStyles } from './Size_Small.styles';

const meta: Meta<typeof Size_Small> = {
  title: 'Components/Size_Small',
  component: Size_Small,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_Small>;

export const Default: Story = {
  args: {
    ...Size_SmallStyles,
  },
};
