import type { Meta, StoryObj } from '@storybook/react';
import { Server } from './Server';
import { ServerStyles } from './Server.styles';

const meta: Meta<typeof Server> = {
  title: 'Components/Server',
  component: Server,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Server>;

export const Default: Story = {
  args: {
    ...ServerStyles,
  },
};
