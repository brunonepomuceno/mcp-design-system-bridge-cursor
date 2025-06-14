import type { Meta, StoryObj } from '@storybook/react';
import { State_Hover } from './State_Hover';
import { State_HoverStyles } from './State_Hover.styles';

const meta: Meta<typeof State_Hover> = {
  title: 'Components/State_Hover',
  component: State_Hover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Hover>;

export const Default: Story = {
  args: {
    ...State_HoverStyles,
  },
};
