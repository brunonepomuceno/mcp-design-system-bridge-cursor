import type { Meta, StoryObj } from '@storybook/react';
import { Pause } from './Pause';
import { PauseStyles } from './Pause.styles';

const meta: Meta<typeof Pause> = {
  title: 'Components/Pause',
  component: Pause,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pause>;

export const Default: Story = {
  args: {
    ...PauseStyles,
  },
};
