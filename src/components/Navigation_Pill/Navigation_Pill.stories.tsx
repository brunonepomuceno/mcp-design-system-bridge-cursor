import type { Meta, StoryObj } from '@storybook/react';
import { Navigation_Pill } from './Navigation_Pill';
import { Navigation_PillStyles } from './Navigation_Pill.styles';

const meta: Meta<typeof Navigation_Pill> = {
  title: 'Components/Navigation_Pill',
  component: Navigation_Pill,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation_Pill>;

export const Default: Story = {
  args: {
    ...Navigation_PillStyles,
  },
};
