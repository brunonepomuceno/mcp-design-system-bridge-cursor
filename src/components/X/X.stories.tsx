import type { Meta, StoryObj } from '@storybook/react';
import { X } from './X';
import { XStyles } from './X.styles';

const meta: Meta<typeof X> = {
  title: 'Components/X',
  component: X,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof X>;

export const Default: Story = {
  args: {
    ...XStyles,
  },
};
