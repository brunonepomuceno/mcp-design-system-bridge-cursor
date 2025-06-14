import type { Meta, StoryObj } from '@storybook/react';
import { Bar_chart } from './Bar_chart';
import { Bar_chartStyles } from './Bar_chart.styles';

const meta: Meta<typeof Bar_chart> = {
  title: 'Components/Bar_chart',
  component: Bar_chart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Bar_chart>;

export const Default: Story = {
  args: {
    ...Bar_chartStyles,
  },
};
