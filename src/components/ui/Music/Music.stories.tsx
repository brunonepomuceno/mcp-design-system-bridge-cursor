import type { Meta, StoryObj } from '@storybook/react';
import { Music } from './Music';
import { MusicStyles } from './Music.styles';

const meta: Meta<typeof Music> = {
  title: 'Components/Music',
  component: Music,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Music>;

export const Default: Story = {
  args: {
    ...MusicStyles,
  },
};
