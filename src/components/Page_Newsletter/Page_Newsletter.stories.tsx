import type { Meta, StoryObj } from '@storybook/react';
import { Page_Newsletter } from './Page_Newsletter';
import { Page_NewsletterStyles } from './Page_Newsletter.styles';

const meta: Meta<typeof Page_Newsletter> = {
  title: 'Components/Page_Newsletter',
  component: Page_Newsletter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page_Newsletter>;

export const Default: Story = {
  args: {
    ...Page_NewsletterStyles,
  },
};
