import type { Meta, StoryObj } from '@storybook/react';
import { Slot } from './Slot';
import { SlotStyles } from './Slot.styles';

const meta: Meta<typeof Slot> = {
  title: 'Components/Slot',
  component: Slot,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slot>;

export const Default: Story = {
  args: {
    ...SlotStyles,
  },
};
