import type { Meta, StoryObj } from '@storybook/react';
import { State_Current_Hover } from './State_Current_Hover';
import { State_Current_HoverStyles } from './State_Current_Hover.styles';

const meta: Meta<typeof State_Current_Hover> = {
  title: 'Components/State_Current_Hover',
  component: State_Current_Hover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Current_Hover>;

export const Default: Story = {
  args: {
    ...State_Current_HoverStyles,
  },
};
