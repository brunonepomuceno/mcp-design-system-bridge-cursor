import type { Meta, StoryObj } from '@storybook/react';
import { Check_circle } from './Check_circle';
import { Check_circleStyles } from './Check_circle.styles';

const meta: Meta<typeof Check_circle> = {
  title: 'Components/Check_circle',
  component: Check_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Check_circle>;

export const Default: Story = {
  args: {
    ...Check_circleStyles,
  },
};
