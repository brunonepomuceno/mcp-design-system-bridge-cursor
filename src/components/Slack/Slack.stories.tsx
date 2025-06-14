import type { Meta, StoryObj } from '@storybook/react';
import { Slack } from './Slack';
import { SlackStyles } from './Slack.styles';

const meta: Meta<typeof Slack> = {
  title: 'Components/Slack',
  component: Slack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slack>;

export const Default: Story = {
  args: {
    ...SlackStyles,
  },
};
