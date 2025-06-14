import type { Meta, StoryObj } from '@storybook/react';
import { Examples_Waitlist } from './Examples_Waitlist';
import { Examples_WaitlistStyles } from './Examples_Waitlist.styles';

const meta: Meta<typeof Examples_Waitlist> = {
  title: 'Components/Examples_Waitlist',
  component: Examples_Waitlist,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Examples_Waitlist>;

export const Default: Story = {
  args: {
    ...Examples_WaitlistStyles,
  },
};
