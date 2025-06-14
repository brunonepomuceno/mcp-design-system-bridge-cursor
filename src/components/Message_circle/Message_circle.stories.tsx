import type { Meta, StoryObj } from '@storybook/react';
import { Message_circle } from './Message_circle';
import { Message_circleStyles } from './Message_circle.styles';

const meta: Meta<typeof Message_circle> = {
  title: 'Components/Message_circle',
  component: Message_circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Message_circle>;

export const Default: Story = {
  args: {
    ...Message_circleStyles,
  },
};
