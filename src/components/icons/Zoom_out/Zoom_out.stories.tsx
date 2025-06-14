import type { Meta, StoryObj } from '@storybook/react';
import { Zoom_out } from './Zoom_out';
import { Zoom_outStyles } from './Zoom_out.styles';

const meta: Meta<typeof Zoom_out> = {
  title: 'Components/Zoom_out',
  component: Zoom_out,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Zoom_out>;

export const Default: Story = {
  args: {
    ...Zoom_outStyles,
  },
};
