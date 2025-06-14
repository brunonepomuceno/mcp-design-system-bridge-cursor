import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox_Group } from './Checkbox_Group';
import { Checkbox_GroupStyles } from './Checkbox_Group.styles';

const meta: Meta<typeof Checkbox_Group> = {
  title: 'Components/Checkbox_Group',
  component: Checkbox_Group,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox_Group>;

export const Default: Story = {
  args: {
    ...Checkbox_GroupStyles,
  },
};
