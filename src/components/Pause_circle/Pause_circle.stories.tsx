import type { Meta, StoryObj } from '@storybook/react';
import { Pause_circle } from './Pause_circle';
import { Pause_circleStyles } from './Pause_circle.styles';

const meta: Meta<typeof Pause_circle> = {
  title: 'Components/Pause_circle',
  component: Pause_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pause_circle>;

export const Default: Story = {
  args: {
    ...Pause_circleStyles,
  },
};
