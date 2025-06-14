import type { Meta, StoryObj } from '@storybook/react';
import { Tag_Toggle_Group } from './Tag_Toggle_Group';
import { Tag_Toggle_GroupStyles } from './Tag_Toggle_Group.styles';

const meta: Meta<typeof Tag_Toggle_Group> = {
  title: 'Components/Tag_Toggle_Group',
  component: Tag_Toggle_Group,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag_Toggle_Group>;

export const Default: Story = {
  args: {
    ...Tag_Toggle_GroupStyles,
  },
};
