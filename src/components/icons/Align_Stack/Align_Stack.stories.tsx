import type { Meta, StoryObj } from '@storybook/react';
import { Align_Stack } from './Align_Stack';
import { Align_StackStyles } from './Align_Stack.styles';

const meta: Meta<typeof Align_Stack> = {
  title: 'Components/Align_Stack',
  component: Align_Stack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Align_Stack>;

export const Default: Story = {
  args: {
    ...Align_StackStyles,
  },
};
