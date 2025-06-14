import type { Meta, StoryObj } from '@storybook/react';
import { Stop_circle } from './Stop_circle';
import { Stop_circleStyles } from './Stop_circle.styles';

const meta: Meta<typeof Stop_circle> = {
  title: 'Components/Stop_circle',
  component: Stop_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stop_circle>;

export const Default: Story = {
  args: {
    ...Stop_circleStyles,
  },
};
