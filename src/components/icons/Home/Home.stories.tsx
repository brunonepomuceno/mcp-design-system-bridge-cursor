import type { Meta, StoryObj } from '@storybook/react';
import { Home } from './Home';
import { HomeStyles } from './Home.styles';

const meta: Meta<typeof Home> = {
  title: 'Components/Home',
  component: Home,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Home>;

export const Default: Story = {
  args: {
    ...HomeStyles,
  },
};
