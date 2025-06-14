import type { Meta, StoryObj } from '@storybook/react';
import { Twitch } from './Twitch';
import { TwitchStyles } from './Twitch.styles';

const meta: Meta<typeof Twitch> = {
  title: 'Components/Twitch',
  component: Twitch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Twitch>;

export const Default: Story = {
  args: {
    ...TwitchStyles,
  },
};
