import type { Meta, StoryObj } from '@storybook/react';
import { Phone_forwarded } from './Phone_forwarded';
import { Phone_forwardedStyles } from './Phone_forwarded.styles';

const meta: Meta<typeof Phone_forwarded> = {
  title: 'Components/Phone_forwarded',
  component: Phone_forwarded,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Phone_forwarded>;

export const Default: Story = {
  args: {
    ...Phone_forwardedStyles,
  },
};
