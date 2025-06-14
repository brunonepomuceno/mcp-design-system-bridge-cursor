import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';
import { NavigationStyles } from './Navigation.styles';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    ...NavigationStyles,
  },
};
