import type { Meta, StoryObj } from '@storybook/react';
import { Alert_triangle } from './Alert_triangle';
import { Alert_triangleStyles } from './Alert_triangle.styles';

const meta: Meta<typeof Alert_triangle> = {
  title: 'Components/Alert_triangle',
  component: Alert_triangle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert_triangle>;

export const Default: Story = {
  args: {
    ...Alert_triangleStyles,
  },
};
