import type { Meta, StoryObj } from '@storybook/react';
import { Zoom_in } from './Zoom_in';
import { Zoom_inStyles } from './Zoom_in.styles';

const meta: Meta<typeof Zoom_in> = {
  title: 'Components/Zoom_in',
  component: Zoom_in,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Zoom_in>;

export const Default: Story = {
  args: {
    ...Zoom_inStyles,
  },
};
