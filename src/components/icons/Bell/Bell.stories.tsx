import type { Meta, StoryObj } from '@storybook/react';
import { Bell } from './Bell';
import { BellStyles } from './Bell.styles';

const meta: Meta<typeof Bell> = {
  title: 'Components/Bell',
  component: Bell,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Bell>;

export const Default: Story = {
  args: {
    ...BellStyles,
  },
};
