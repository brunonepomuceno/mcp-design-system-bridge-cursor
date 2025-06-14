import type { Meta, StoryObj } from '@storybook/react';
import { Plus_circle } from './Plus_circle';
import { Plus_circleStyles } from './Plus_circle.styles';

const meta: Meta<typeof Plus_circle> = {
  title: 'Components/Plus_circle',
  component: Plus_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Plus_circle>;

export const Default: Story = {
  args: {
    ...Plus_circleStyles,
  },
};
