import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { CalendarStyles } from './Calendar.styles';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    ...CalendarStyles,
  },
};
