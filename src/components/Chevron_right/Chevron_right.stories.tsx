import type { Meta, StoryObj } from '@storybook/react';
import { Chevron_right } from './Chevron_right';
import { Chevron_rightStyles } from './Chevron_right.styles';

const meta: Meta<typeof Chevron_right> = {
  title: 'Components/Chevron_right',
  component: Chevron_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevron_right>;

export const Default: Story = {
  args: {
    ...Chevron_rightStyles,
  },
};
