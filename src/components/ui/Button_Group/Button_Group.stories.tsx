import type { Meta, StoryObj } from '@storybook/react';
import { Button_Group } from './Button_Group';
import { Button_GroupStyles } from './Button_Group.styles';

const meta: Meta<typeof Button_Group> = {
  title: 'Components/Button_Group',
  component: Button_Group,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button_Group>;

export const Default: Story = {
  args: {
    ...Button_GroupStyles,
  },
};
