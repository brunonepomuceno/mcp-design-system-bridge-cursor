import type { Meta, StoryObj } from '@storybook/react';
import { Trending_down } from './Trending_down';
import { Trending_downStyles } from './Trending_down.styles';

const meta: Meta<typeof Trending_down> = {
  title: 'Components/Trending_down',
  component: Trending_down,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Trending_down>;

export const Default: Story = {
  args: {
    ...Trending_downStyles,
  },
};
