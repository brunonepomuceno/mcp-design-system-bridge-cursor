import type { Meta, StoryObj } from '@storybook/react';
import { Git_merge } from './Git_merge';
import { Git_mergeStyles } from './Git_merge.styles';

const meta: Meta<typeof Git_merge> = {
  title: 'Components/Git_merge',
  component: Git_merge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Git_merge>;

export const Default: Story = {
  args: {
    ...Git_mergeStyles,
  },
};
