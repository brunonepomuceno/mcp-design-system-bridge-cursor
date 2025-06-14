import type { Meta, StoryObj } from '@storybook/react';
import { Align_End } from './Align_End';
import { Align_EndStyles } from './Align_End.styles';

const meta: Meta<typeof Align_End> = {
  title: 'Components/Align_End',
  component: Align_End,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Align_End>;

export const Default: Story = {
  args: {
    ...Align_EndStyles,
  },
};
