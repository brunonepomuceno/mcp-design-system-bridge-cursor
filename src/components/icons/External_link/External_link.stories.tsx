import type { Meta, StoryObj } from '@storybook/react';
import { External_link } from './External_link';
import { External_linkStyles } from './External_link.styles';

const meta: Meta<typeof External_link> = {
  title: 'Components/External_link',
  component: External_link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof External_link>;

export const Default: Story = {
  args: {
    ...External_linkStyles,
  },
};
