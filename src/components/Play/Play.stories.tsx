import type { Meta, StoryObj } from '@storybook/react';
import { Play } from './Play';
import { PlayStyles } from './Play.styles';

const meta: Meta<typeof Play> = {
  title: 'Components/Play',
  component: Play,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Play>;

export const Default: Story = {
  args: {
    ...PlayStyles,
  },
};
