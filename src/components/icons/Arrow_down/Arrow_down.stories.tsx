import type { Meta, StoryObj } from '@storybook/react';
import { Arrow_down } from './Arrow_down';
import { Arrow_downStyles } from './Arrow_down.styles';

const meta: Meta<typeof Arrow_down> = {
  title: 'Components/Arrow_down',
  component: Arrow_down,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Arrow_down>;

export const Default: Story = {
  args: {
    ...Arrow_downStyles,
  },
};
