import type { Meta, StoryObj } from '@storybook/react';
import { Instagram } from './Instagram';
import { InstagramStyles } from './Instagram.styles';

const meta: Meta<typeof Instagram> = {
  title: 'Components/Instagram',
  component: Instagram,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Instagram>;

export const Default: Story = {
  args: {
    ...InstagramStyles,
  },
};
