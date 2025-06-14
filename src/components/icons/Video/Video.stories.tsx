import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';
import { VideoStyles } from './Video.styles';

const meta: Meta<typeof Video> = {
  title: 'Components/Video',
  component: Video,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    ...VideoStyles,
  },
};
