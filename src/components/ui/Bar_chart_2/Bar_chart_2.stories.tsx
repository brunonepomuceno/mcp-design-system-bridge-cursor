import type { Meta, StoryObj } from '@storybook/react';
import { Bar_chart_2 } from './Bar_chart_2';
import { Bar_chart_2Styles } from './Bar_chart_2.styles';

const meta: Meta<typeof Bar_chart_2> = {
  title: 'Components/Bar_chart_2',
  component: Bar_chart_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Bar_chart_2>;

export const Default: Story = {
  args: {
    ...Bar_chart_2Styles,
  },
};
