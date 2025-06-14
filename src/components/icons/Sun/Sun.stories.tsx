import type { Meta, StoryObj } from '@storybook/react';
import { Sun } from './Sun';
import { SunStyles } from './Sun.styles';

const meta: Meta<typeof Sun> = {
  title: 'Components/Sun',
  component: Sun,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sun>;

export const Default: Story = {
  args: {
    ...SunStyles,
  },
};
