import type { Meta, StoryObj } from '@storybook/react';
import { Shield } from './Shield';
import { ShieldStyles } from './Shield.styles';

const meta: Meta<typeof Shield> = {
  title: 'Components/Shield',
  component: Shield,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Shield>;

export const Default: Story = {
  args: {
    ...ShieldStyles,
  },
};
