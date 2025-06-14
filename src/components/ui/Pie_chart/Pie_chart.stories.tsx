import type { Meta, StoryObj } from '@storybook/react';
import { Pie_chart } from './Pie_chart';
import { Pie_chartStyles } from './Pie_chart.styles';

const meta: Meta<typeof Pie_chart> = {
  title: 'Components/Pie_chart',
  component: Pie_chart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pie_chart>;

export const Default: Story = {
  args: {
    ...Pie_chartStyles,
  },
};
