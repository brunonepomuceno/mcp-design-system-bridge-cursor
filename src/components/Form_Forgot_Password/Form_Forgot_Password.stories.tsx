import type { Meta, StoryObj } from '@storybook/react';
import { Form_Forgot_Password } from './Form_Forgot_Password';
import { Form_Forgot_PasswordStyles } from './Form_Forgot_Password.styles';

const meta: Meta<typeof Form_Forgot_Password> = {
  title: 'Components/Form_Forgot_Password',
  component: Form_Forgot_Password,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form_Forgot_Password>;

export const Default: Story = {
  args: {
    ...Form_Forgot_PasswordStyles,
  },
};
