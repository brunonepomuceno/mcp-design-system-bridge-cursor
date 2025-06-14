import type { Meta, StoryObj } from '@storybook/react';
import { Git_branch } from './Git_branch';
import { Git_branchStyles } from './Git_branch.styles';

const meta: Meta<typeof Git_branch> = {
  title: 'Components/Git_branch',
  component: Git_branch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Git_branch>;

export const Default: Story = {
  args: {
    ...Git_branchStyles,
  },
};
