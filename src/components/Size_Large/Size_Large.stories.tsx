import type { Meta, StoryObj } from '@storybook/react';
import { Size_Large } from './Size_Large';
import { Size_LargeStyles } from './Size_Large.styles';

const meta: Meta<typeof Size_Large> = {
  title: 'Components/Size_Large',
  component: Size_Large,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Size_Large>;

export const Default: Story = {
  args: {
    ...Size_LargeStyles,
  },
};
