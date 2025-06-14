import type { Meta, StoryObj } from '@storybook/react';
import { Chevrons_right } from './Chevrons_right';
import { Chevrons_rightStyles } from './Chevrons_right.styles';

const meta: Meta<typeof Chevrons_right> = {
  title: 'Components/Chevrons_right',
  component: Chevrons_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevrons_right>;

export const Default: Story = {
  args: {
    ...Chevrons_rightStyles,
  },
};
