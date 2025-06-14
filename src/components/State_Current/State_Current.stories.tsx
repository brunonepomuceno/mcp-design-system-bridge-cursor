import type { Meta, StoryObj } from '@storybook/react';
import { State_Current } from './State_Current';
import { State_CurrentStyles } from './State_Current.styles';

const meta: Meta<typeof State_Current> = {
  title: 'Components/State_Current',
  component: State_Current,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Current>;

export const Default: Story = {
  args: {
    ...State_CurrentStyles,
  },
};
