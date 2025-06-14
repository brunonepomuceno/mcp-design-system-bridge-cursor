import type { Meta, StoryObj } from '@storybook/react';
import { Header_Auth } from './Header_Auth';
import { Header_AuthStyles } from './Header_Auth.styles';

const meta: Meta<typeof Header_Auth> = {
  title: 'Components/Header_Auth',
  component: Header_Auth,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header_Auth>;

export const Default: Story = {
  args: {
    ...Header_AuthStyles,
  },
};
