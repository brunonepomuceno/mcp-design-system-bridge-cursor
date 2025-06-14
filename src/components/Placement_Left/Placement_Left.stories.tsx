import type { Meta, StoryObj } from '@storybook/react';
import { Placement_Left } from './Placement_Left';
import { Placement_LeftStyles } from './Placement_Left.styles';

const meta: Meta<typeof Placement_Left> = {
  title: 'Components/Placement_Left',
  component: Placement_Left,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Placement_Left>;

export const Default: Story = {
  args: {
    ...Placement_LeftStyles,
  },
};
