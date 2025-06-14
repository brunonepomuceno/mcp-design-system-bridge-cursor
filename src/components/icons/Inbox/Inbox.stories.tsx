import type { Meta, StoryObj } from '@storybook/react';
import { Inbox } from './Inbox';
import { InboxStyles } from './Inbox.styles';

const meta: Meta<typeof Inbox> = {
  title: 'Components/Inbox',
  component: Inbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Inbox>;

export const Default: Story = {
  args: {
    ...InboxStyles,
  },
};
