import type { Meta, StoryObj } from '@storybook/react';
import { Placement_Bottom } from './Placement_Bottom';
import { Placement_BottomStyles } from './Placement_Bottom.styles';

const meta: Meta<typeof Placement_Bottom> = {
  title: 'Components/Placement_Bottom',
  component: Placement_Bottom,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Placement_Bottom>;

export const Default: Story = {
  args: {
    ...Placement_BottomStyles,
  },
};
