import type { Meta, StoryObj } from '@storybook/react';
import { Avatar_Group } from './Avatar_Group';
import { Avatar_GroupStyles } from './Avatar_Group.styles';

const meta: Meta<typeof Avatar_Group> = {
  title: 'Components/Avatar_Group',
  component: Avatar_Group,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar_Group>;

export const Default: Story = {
  args: {
    ...Avatar_GroupStyles,
  },
};
