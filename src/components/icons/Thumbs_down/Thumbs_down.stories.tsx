import type { Meta, StoryObj } from '@storybook/react';
import { Thumbs_down } from './Thumbs_down';
import { Thumbs_downStyles } from './Thumbs_down.styles';

const meta: Meta<typeof Thumbs_down> = {
  title: 'Components/Thumbs_down',
  component: Thumbs_down,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Thumbs_down>;

export const Default: Story = {
  args: {
    ...Thumbs_downStyles,
  },
};
