import type { Meta, StoryObj } from '@storybook/react';
import { Youtube } from './Youtube';
import { YoutubeStyles } from './Youtube.styles';

const meta: Meta<typeof Youtube> = {
  title: 'Components/Youtube',
  component: Youtube,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Youtube>;

export const Default: Story = {
  args: {
    ...YoutubeStyles,
  },
};
