import type { Meta, StoryObj } from '@storybook/react';
import { Phone } from './Phone';
import { PhoneStyles } from './Phone.styles';

const meta: Meta<typeof Phone> = {
  title: 'Components/Phone',
  component: Phone,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Phone>;

export const Default: Story = {
  args: {
    ...PhoneStyles,
  },
};
