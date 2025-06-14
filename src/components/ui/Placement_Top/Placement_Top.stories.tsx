import type { Meta, StoryObj } from '@storybook/react';
import { Placement_Top } from './Placement_Top';
import { Placement_TopStyles } from './Placement_Top.styles';

const meta: Meta<typeof Placement_Top> = {
  title: 'Components/Placement_Top',
  component: Placement_Top,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Placement_Top>;

export const Default: Story = {
  args: {
    ...Placement_TopStyles,
  },
};
