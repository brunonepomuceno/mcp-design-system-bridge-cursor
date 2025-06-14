import type { Meta, StoryObj } from '@storybook/react';
import { Git_commit } from './Git_commit';
import { Git_commitStyles } from './Git_commit.styles';

const meta: Meta<typeof Git_commit> = {
  title: 'Components/Git_commit',
  component: Git_commit,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Git_commit>;

export const Default: Story = {
  args: {
    ...Git_commitStyles,
  },
};
