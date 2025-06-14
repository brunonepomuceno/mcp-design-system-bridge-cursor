import type { Meta, StoryObj } from '@storybook/react';
import { Git_pull_request } from './Git_pull_request';
import { Git_pull_requestStyles } from './Git_pull_request.styles';

const meta: Meta<typeof Git_pull_request> = {
  title: 'Components/Git_pull_request',
  component: Git_pull_request,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Git_pull_request>;

export const Default: Story = {
  args: {
    ...Git_pull_requestStyles,
  },
};
