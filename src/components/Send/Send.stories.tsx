import type { Meta, StoryObj } from '@storybook/react';
import { Send } from './Send';
import { SendStyles } from './Send.styles';

const meta: Meta<typeof Send> = {
  title: 'Components/Send',
  component: Send,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Send>;

export const Default: Story = {
  args: {
    ...SendStyles,
  },
};
