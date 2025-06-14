import type { Meta, StoryObj } from '@storybook/react';
import { Align_center } from './Align_center';
import { Align_centerStyles } from './Align_center.styles';

const meta: Meta<typeof Align_center> = {
  title: 'Components/Align_center',
  component: Align_center,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Align_center>;

export const Default: Story = {
  args: {
    ...Align_centerStyles,
  },
};
