import type { Meta, StoryObj } from '@storybook/react';
import { Message_square } from './Message_square';
import { Message_squareStyles } from './Message_square.styles';

const meta: Meta<typeof Message_square> = {
  title: 'Components/Message_square',
  component: Message_square,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Message_square>;

export const Default: Story = {
  args: {
    ...Message_squareStyles,
  },
};
