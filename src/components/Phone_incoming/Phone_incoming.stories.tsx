import type { Meta, StoryObj } from '@storybook/react';
import { Phone_incoming } from './Phone_incoming';
import { Phone_incomingStyles } from './Phone_incoming.styles';

const meta: Meta<typeof Phone_incoming> = {
  title: 'Components/Phone_incoming',
  component: Phone_incoming,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Phone_incoming>;

export const Default: Story = {
  args: {
    ...Phone_incomingStyles,
  },
};
