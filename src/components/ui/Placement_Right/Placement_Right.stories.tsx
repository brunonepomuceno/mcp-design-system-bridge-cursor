import type { Meta, StoryObj } from '@storybook/react';
import { Placement_Right } from './Placement_Right';
import { Placement_RightStyles } from './Placement_Right.styles';

const meta: Meta<typeof Placement_Right> = {
  title: 'Components/Placement_Right',
  component: Placement_Right,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Placement_Right>;

export const Default: Story = {
  args: {
    ...Placement_RightStyles,
  },
};
