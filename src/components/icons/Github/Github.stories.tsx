import type { Meta, StoryObj } from '@storybook/react';
import { Github } from './Github';
import { GithubStyles } from './Github.styles';

const meta: Meta<typeof Github> = {
  title: 'Components/Github',
  component: Github,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Github>;

export const Default: Story = {
  args: {
    ...GithubStyles,
  },
};
