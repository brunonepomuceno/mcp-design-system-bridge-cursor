import type { Meta, StoryObj } from '@storybook/react';
import { Form_Newsletter } from './Form_Newsletter';
import { Form_NewsletterStyles } from './Form_Newsletter.styles';

const meta: Meta<typeof Form_Newsletter> = {
  title: 'Components/Form_Newsletter',
  component: Form_Newsletter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Form_Newsletter>;

export const Default: Story = {
  args: {
    ...Form_NewsletterStyles,
  },
};
