import type { Meta, StoryObj } from '@storybook/react';
import { Facebook } from './Facebook';
import { FacebookStyles } from './Facebook.styles';

const meta: Meta<typeof Facebook> = {
  title: 'Components/Facebook',
  component: Facebook,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Facebook>;

export const Default: Story = {
  args: {
    ...FacebookStyles,
  },
};
