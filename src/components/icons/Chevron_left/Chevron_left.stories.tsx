import type { Meta, StoryObj } from '@storybook/react';
import { Chevron_left } from './Chevron_left';
import { Chevron_leftStyles } from './Chevron_left.styles';

const meta: Meta<typeof Chevron_left> = {
  title: 'Components/Chevron_left',
  component: Chevron_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevron_left>;

export const Default: Story = {
  args: {
    ...Chevron_leftStyles,
  },
};
