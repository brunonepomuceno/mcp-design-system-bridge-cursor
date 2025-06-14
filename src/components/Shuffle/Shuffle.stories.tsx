import type { Meta, StoryObj } from '@storybook/react';
import { Shuffle } from './Shuffle';
import { ShuffleStyles } from './Shuffle.styles';

const meta: Meta<typeof Shuffle> = {
  title: 'Components/Shuffle',
  component: Shuffle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Shuffle>;

export const Default: Story = {
  args: {
    ...ShuffleStyles,
  },
};
