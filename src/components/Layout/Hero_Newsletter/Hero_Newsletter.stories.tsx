import type { Meta, StoryObj } from '@storybook/react';
import { Hero_Newsletter } from './Hero_Newsletter';
import { Hero_NewsletterStyles } from './Hero_Newsletter.styles';

const meta: Meta<typeof Hero_Newsletter> = {
  title: 'Components/Hero_Newsletter',
  component: Hero_Newsletter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero_Newsletter>;

export const Default: Story = {
  args: {
    ...Hero_NewsletterStyles,
  },
};
