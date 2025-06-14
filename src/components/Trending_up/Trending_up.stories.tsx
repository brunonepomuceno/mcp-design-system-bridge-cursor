import type { Meta, StoryObj } from '@storybook/react';
import { Trending_up } from './Trending_up';
import { Trending_upStyles } from './Trending_up.styles';

const meta: Meta<typeof Trending_up> = {
  title: 'Components/Trending_up',
  component: Trending_up,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Trending_up>;

export const Default: Story = {
  args: {
    ...Trending_upStyles,
  },
};
