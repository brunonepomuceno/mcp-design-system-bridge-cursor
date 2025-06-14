import type { Meta, StoryObj } from '@storybook/react';
import { Toggle_left } from './Toggle_left';
import { Toggle_leftStyles } from './Toggle_left.styles';

const meta: Meta<typeof Toggle_left> = {
  title: 'Components/Toggle_left',
  component: Toggle_left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle_left>;

export const Default: Story = {
  args: {
    ...Toggle_leftStyles,
  },
};
