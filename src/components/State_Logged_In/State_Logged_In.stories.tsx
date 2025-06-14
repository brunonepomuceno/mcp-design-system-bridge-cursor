import type { Meta, StoryObj } from '@storybook/react';
import { State_Logged_In } from './State_Logged_In';
import { State_Logged_InStyles } from './State_Logged_In.styles';

const meta: Meta<typeof State_Logged_In> = {
  title: 'Components/State_Logged_In',
  component: State_Logged_In,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Logged_In>;

export const Default: Story = {
  args: {
    ...State_Logged_InStyles,
  },
};
