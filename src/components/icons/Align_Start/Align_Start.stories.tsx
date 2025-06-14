import type { Meta, StoryObj } from '@storybook/react';
import { Align_Start } from './Align_Start';
import { Align_StartStyles } from './Align_Start.styles';

const meta: Meta<typeof Align_Start> = {
  title: 'Components/Align_Start',
  component: Align_Start,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Align_Start>;

export const Default: Story = {
  args: {
    ...Align_StartStyles,
  },
};
