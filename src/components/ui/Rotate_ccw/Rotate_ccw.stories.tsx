import type { Meta, StoryObj } from '@storybook/react';
import { Rotate_ccw } from './Rotate_ccw';
import { Rotate_ccwStyles } from './Rotate_ccw.styles';

const meta: Meta<typeof Rotate_ccw> = {
  title: 'Components/Rotate_ccw',
  component: Rotate_ccw,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rotate_ccw>;

export const Default: Story = {
  args: {
    ...Rotate_ccwStyles,
  },
};
