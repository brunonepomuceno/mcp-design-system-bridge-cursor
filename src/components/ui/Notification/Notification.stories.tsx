import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';
import { NotificationStyles } from './Notification.styles';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    ...NotificationStyles,
  },
};
