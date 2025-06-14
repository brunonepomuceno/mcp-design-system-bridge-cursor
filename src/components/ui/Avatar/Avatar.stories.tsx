import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { AvatarStyles } from './Avatar.styles';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    ...AvatarStyles,
  },
};
