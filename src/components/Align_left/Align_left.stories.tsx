import type { Meta, StoryObj } from '@storybook/react';
import { Align_left } from './Align_left';
import { Align_leftStyles } from './Align_left.styles';

const meta: Meta<typeof Align_left> = {
  title: 'Components/Align_left',
  component: Align_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Align_left>;

export const Default: Story = {
  args: {
    ...Align_leftStyles,
  },
};
