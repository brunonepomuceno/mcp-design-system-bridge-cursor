import type { Meta, StoryObj } from '@storybook/react';
import { Form_Register } from './Form_Register';
import { Form_RegisterStyles } from './Form_Register.styles';

const meta: Meta<typeof Form_Register> = {
  title: 'Components/Form_Register',
  component: Form_Register,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form_Register>;

export const Default: Story = {
  args: {
    ...Form_RegisterStyles,
  },
};
