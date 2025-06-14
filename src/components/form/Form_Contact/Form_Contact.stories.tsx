import type { Meta, StoryObj } from '@storybook/react';
import { Form_Contact } from './Form_Contact';
import { Form_ContactStyles } from './Form_Contact.styles';

const meta: Meta<typeof Form_Contact> = {
  title: 'Components/Form_Contact',
  component: Form_Contact,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form_Contact>;

export const Default: Story = {
  args: {
    ...Form_ContactStyles,
  },
};
