import type { Meta, StoryObj } from '@storybook/react';
import { Percent } from './Percent';
import { PercentStyles } from './Percent.styles';

const meta: Meta<typeof Percent> = {
  title: 'Components/Percent',
  component: Percent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Percent>;

export const Default: Story = {
  args: {
    ...PercentStyles,
  },
};
