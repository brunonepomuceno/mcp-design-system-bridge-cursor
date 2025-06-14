import type { Meta, StoryObj } from '@storybook/react';
import { Menu_Header } from './Menu_Header';
import { Menu_HeaderStyles } from './Menu_Header.styles';

const meta: Meta<typeof Menu_Header> = {
  title: 'Components/Menu_Header',
  component: Menu_Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu_Header>;

export const Default: Story = {
  args: {
    ...Menu_HeaderStyles,
  },
};
