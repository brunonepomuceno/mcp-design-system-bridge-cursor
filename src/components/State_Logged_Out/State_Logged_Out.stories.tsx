import type { Meta, StoryObj } from '@storybook/react';
import { State_Logged_Out } from './State_Logged_Out';
import { State_Logged_OutStyles } from './State_Logged_Out.styles';

const meta: Meta<typeof State_Logged_Out> = {
  title: 'Components/State_Logged_Out',
  component: State_Logged_Out,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Logged_Out>;

export const Default: Story = {
  args: {
    ...State_Logged_OutStyles,
  },
};
