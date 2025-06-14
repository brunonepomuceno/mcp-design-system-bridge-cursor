import type { Meta, StoryObj } from '@storybook/react';
import { X_octagon } from './X_octagon';
import { X_octagonStyles } from './X_octagon.styles';

const meta: Meta<typeof X_octagon> = {
  title: 'Components/X_octagon',
  component: X_octagon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof X_octagon>;

export const Default: Story = {
  args: {
    ...X_octagonStyles,
  },
};
