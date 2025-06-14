import type { Meta, StoryObj } from '@storybook/react';
import { User } from './User';
import { UserStyles } from './User.styles';

const meta: Meta<typeof User> = {
  title: 'Components/User',
  component: User,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof User>;

export const Default: Story = {
  args: {
    ...UserStyles,
  },
};
