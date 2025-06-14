import type { Meta, StoryObj } from '@storybook/react';
import { Toggle_right } from './Toggle_right';
import { Toggle_rightStyles } from './Toggle_right.styles';

const meta: Meta<typeof Toggle_right> = {
  title: 'Components/Toggle_right',
  component: Toggle_right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle_right>;

export const Default: Story = {
  args: {
    ...Toggle_rightStyles,
  },
};
