import type { Meta, StoryObj } from '@storybook/react';
import { Rewind } from './Rewind';
import { RewindStyles } from './Rewind.styles';

const meta: Meta<typeof Rewind> = {
  title: 'Components/Rewind',
  component: Rewind,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rewind>;

export const Default: Story = {
  args: {
    ...RewindStyles,
  },
};
