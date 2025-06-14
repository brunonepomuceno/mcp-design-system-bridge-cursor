import type { Meta, StoryObj } from '@storybook/react';
import { Align_right } from './Align_right';
import { Align_rightStyles } from './Align_right.styles';

const meta: Meta<typeof Align_right> = {
  title: 'Components/Align_right',
  component: Align_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Align_right>;

export const Default: Story = {
  args: {
    ...Align_rightStyles,
  },
};
