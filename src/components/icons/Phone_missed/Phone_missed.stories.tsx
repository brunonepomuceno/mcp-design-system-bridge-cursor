import type { Meta, StoryObj } from '@storybook/react';
import { Phone_missed } from './Phone_missed';
import { Phone_missedStyles } from './Phone_missed.styles';

const meta: Meta<typeof Phone_missed> = {
  title: 'Components/Phone_missed',
  component: Phone_missed,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Phone_missed>;

export const Default: Story = {
  args: {
    ...Phone_missedStyles,
  },
};
