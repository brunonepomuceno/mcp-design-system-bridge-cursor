import type { Meta, StoryObj } from '@storybook/react';
import { Mail } from './Mail';
import { MailStyles } from './Mail.styles';

const meta: Meta<typeof Mail> = {
  title: 'Components/Mail',
  component: Mail,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Mail>;

export const Default: Story = {
  args: {
    ...MailStyles,
  },
};
