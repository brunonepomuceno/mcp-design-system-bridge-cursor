import type { Meta, StoryObj } from '@storybook/react';
import { Alert_circle } from './Alert_circle';
import { Alert_circleStyles } from './Alert_circle.styles';

const meta: Meta<typeof Alert_circle> = {
  title: 'Components/Alert_circle',
  component: Alert_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert_circle>;

export const Default: Story = {
  args: {
    ...Alert_circleStyles,
  },
};
