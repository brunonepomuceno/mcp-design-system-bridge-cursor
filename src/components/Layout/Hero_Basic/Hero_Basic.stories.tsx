import type { Meta, StoryObj } from '@storybook/react';
import { Hero_Basic } from './Hero_Basic';
import { Hero_BasicStyles } from './Hero_Basic.styles';

const meta: Meta<typeof Hero_Basic> = {
  title: 'Components/Hero_Basic',
  component: Hero_Basic,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero_Basic>;

export const Default: Story = {
  args: {
    ...Hero_BasicStyles,
  },
};
