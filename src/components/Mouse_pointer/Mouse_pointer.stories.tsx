import type { Meta, StoryObj } from '@storybook/react';
import { Mouse_pointer } from './Mouse_pointer';
import { Mouse_pointerStyles } from './Mouse_pointer.styles';

const meta: Meta<typeof Mouse_pointer> = {
  title: 'Components/Mouse_pointer',
  component: Mouse_pointer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Mouse_pointer>;

export const Default: Story = {
  args: {
    ...Mouse_pointerStyles,
  },
};
