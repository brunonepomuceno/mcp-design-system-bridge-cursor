import type { Meta, StoryObj } from '@storybook/react';
import { Refresh_ccw } from './Refresh_ccw';
import { Refresh_ccwStyles } from './Refresh_ccw.styles';

const meta: Meta<typeof Refresh_ccw> = {
  title: 'Components/Refresh_ccw',
  component: Refresh_ccw,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Refresh_ccw>;

export const Default: Story = {
  args: {
    ...Refresh_ccwStyles,
  },
};
