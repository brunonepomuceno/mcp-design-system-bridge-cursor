import type { Meta, StoryObj } from '@storybook/react';
import { Meh } from './Meh';
import { MehStyles } from './Meh.styles';

const meta: Meta<typeof Meh> = {
  title: 'Components/Meh',
  component: Meh,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Meh>;

export const Default: Story = {
  args: {
    ...MehStyles,
  },
};
