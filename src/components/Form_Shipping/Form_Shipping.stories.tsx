import type { Meta, StoryObj } from '@storybook/react';
import { Form_Shipping } from './Form_Shipping';
import { Form_ShippingStyles } from './Form_Shipping.styles';

const meta: Meta<typeof Form_Shipping> = {
  title: 'Components/Form_Shipping',
  component: Form_Shipping,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form_Shipping>;

export const Default: Story = {
  args: {
    ...Form_ShippingStyles,
  },
};
