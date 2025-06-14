import type { Meta, StoryObj } from '@storybook/react';
import { Phone_call } from './Phone_call';
import { Phone_callStyles } from './Phone_call.styles';

const meta: Meta<typeof Phone_call> = {
  title: 'Components/Phone_call',
  component: Phone_call,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Phone_call>;

export const Default: Story = {
  args: {
    ...Phone_callStyles,
  },
};
