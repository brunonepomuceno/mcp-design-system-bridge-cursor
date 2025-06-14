import type { Meta, StoryObj } from '@storybook/react';
import { Monitor } from './Monitor';
import { MonitorStyles } from './Monitor.styles';

const meta: Meta<typeof Monitor> = {
  title: 'Components/Monitor',
  component: Monitor,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Monitor>;

export const Default: Story = {
  args: {
    ...MonitorStyles,
  },
};
