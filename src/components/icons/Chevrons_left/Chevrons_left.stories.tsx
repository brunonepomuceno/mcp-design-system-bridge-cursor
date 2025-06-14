import type { Meta, StoryObj } from '@storybook/react';
import { Chevrons_left } from './Chevrons_left';
import { Chevrons_leftStyles } from './Chevrons_left.styles';

const meta: Meta<typeof Chevrons_left> = {
  title: 'Components/Chevrons_left',
  component: Chevrons_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevrons_left>;

export const Default: Story = {
  args: {
    ...Chevrons_leftStyles,
  },
};
