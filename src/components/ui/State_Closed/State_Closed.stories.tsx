import type { Meta, StoryObj } from '@storybook/react';
import { State_Closed } from './State_Closed';
import { State_ClosedStyles } from './State_Closed.styles';

const meta: Meta<typeof State_Closed> = {
  title: 'Components/State_Closed',
  component: State_Closed,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Closed>;

export const Default: Story = {
  args: {
    ...State_ClosedStyles,
  },
};
