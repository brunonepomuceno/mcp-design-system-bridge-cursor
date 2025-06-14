import type { Meta, StoryObj } from '@storybook/react';
import { Twitter } from './Twitter';
import { TwitterStyles } from './Twitter.styles';

const meta: Meta<typeof Twitter> = {
  title: 'Components/Twitter',
  component: Twitter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Twitter>;

export const Default: Story = {
  args: {
    ...TwitterStyles,
  },
};
