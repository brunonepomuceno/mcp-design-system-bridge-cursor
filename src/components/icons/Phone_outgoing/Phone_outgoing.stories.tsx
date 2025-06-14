import type { Meta, StoryObj } from '@storybook/react';
import { Phone_outgoing } from './Phone_outgoing';
import { Phone_outgoingStyles } from './Phone_outgoing.styles';

const meta: Meta<typeof Phone_outgoing> = {
  title: 'Components/Phone_outgoing',
  component: Phone_outgoing,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Phone_outgoing>;

export const Default: Story = {
  args: {
    ...Phone_outgoingStyles,
  },
};
