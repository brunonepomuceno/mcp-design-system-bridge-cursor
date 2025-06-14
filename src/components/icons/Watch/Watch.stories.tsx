import type { Meta, StoryObj } from '@storybook/react';
import { Watch } from './Watch';
import { WatchStyles } from './Watch.styles';

const meta: Meta<typeof Watch> = {
  title: 'Components/Watch',
  component: Watch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Watch>;

export const Default: Story = {
  args: {
    ...WatchStyles,
  },
};
