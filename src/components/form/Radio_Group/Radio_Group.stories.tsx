import type { Meta, StoryObj } from '@storybook/react';
import { Radio_Group } from './Radio_Group';
import { Radio_GroupStyles } from './Radio_Group.styles';

const meta: Meta<typeof Radio_Group> = {
  title: 'Components/Radio_Group',
  component: Radio_Group,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio_Group>;

export const Default: Story = {
  args: {
    ...Radio_GroupStyles,
  },
};
