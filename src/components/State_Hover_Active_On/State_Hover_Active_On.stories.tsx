import type { Meta, StoryObj } from '@storybook/react';
import { State_Hover_Active_On } from './State_Hover_Active_On';
import { State_Hover_Active_OnStyles } from './State_Hover_Active_On.styles';

const meta: Meta<typeof State_Hover_Active_On> = {
  title: 'Components/State_Hover_Active_On',
  component: State_Hover_Active_On,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Hover_Active_On>;

export const Default: Story = {
  args: {
    ...State_Hover_Active_OnStyles,
  },
};
