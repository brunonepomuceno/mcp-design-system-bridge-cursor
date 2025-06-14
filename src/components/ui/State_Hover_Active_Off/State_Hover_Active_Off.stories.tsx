import type { Meta, StoryObj } from '@storybook/react';
import { State_Hover_Active_Off } from './State_Hover_Active_Off';
import { State_Hover_Active_OffStyles } from './State_Hover_Active_Off.styles';

const meta: Meta<typeof State_Hover_Active_Off> = {
  title: 'Components/State_Hover_Active_Off',
  component: State_Hover_Active_Off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Hover_Active_Off>;

export const Default: Story = {
  args: {
    ...State_Hover_Active_OffStyles,
  },
};
