import type { Meta, StoryObj } from '@storybook/react';
import { Activity } from './Activity';
import { ActivityStyles } from './Activity.styles';

const meta: Meta<typeof Activity> = {
  title: 'Components/Activity',
  component: Activity,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Activity>;

export const Default: Story = {
  args: {
    ...ActivityStyles,
  },
};
