import type { Meta, StoryObj } from '@storybook/react';
import { Tv } from './Tv';
import { TvStyles } from './Tv.styles';

const meta: Meta<typeof Tv> = {
  title: 'Components/Tv',
  component: Tv,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tv>;

export const Default: Story = {
  args: {
    ...TvStyles,
  },
};
