import type { Meta, StoryObj } from '@storybook/react';
import { Octagon } from './Octagon';
import { OctagonStyles } from './Octagon.styles';

const meta: Meta<typeof Octagon> = {
  title: 'Components/Octagon',
  component: Octagon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Octagon>;

export const Default: Story = {
  args: {
    ...OctagonStyles,
  },
};
