import type { Meta, StoryObj } from '@storybook/react';
import { State_Active } from './State_Active';
import { State_ActiveStyles } from './State_Active.styles';

const meta: Meta<typeof State_Active> = {
  title: 'Components/State_Active',
  component: State_Active,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Active>;

export const Default: Story = {
  args: {
    ...State_ActiveStyles,
  },
};
