import type { Meta, StoryObj } from '@storybook/react';
import { Power } from './Power';
import { PowerStyles } from './Power.styles';

const meta: Meta<typeof Power> = {
  title: 'Components/Power',
  component: Power,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Power>;

export const Default: Story = {
  args: {
    ...PowerStyles,
  },
};
