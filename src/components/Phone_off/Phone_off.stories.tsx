import type { Meta, StoryObj } from '@storybook/react';
import { Phone_off } from './Phone_off';
import { Phone_offStyles } from './Phone_off.styles';

const meta: Meta<typeof Phone_off> = {
  title: 'Components/Phone_off',
  component: Phone_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Phone_off>;

export const Default: Story = {
  args: {
    ...Phone_offStyles,
  },
};
