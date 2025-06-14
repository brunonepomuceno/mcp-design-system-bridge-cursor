import type { Meta, StoryObj } from '@storybook/react';
import { State_Logged_In_Hover } from './State_Logged_In_Hover';
import { State_Logged_In_HoverStyles } from './State_Logged_In_Hover.styles';

const meta: Meta<typeof State_Logged_In_Hover> = {
  title: 'Components/State_Logged_In_Hover',
  component: State_Logged_In_Hover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Logged_In_Hover>;

export const Default: Story = {
  args: {
    ...State_Logged_In_HoverStyles,
  },
};
