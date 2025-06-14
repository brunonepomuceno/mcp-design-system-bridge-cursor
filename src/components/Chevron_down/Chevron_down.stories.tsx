import type { Meta, StoryObj } from '@storybook/react';
import { Chevron_down } from './Chevron_down';
import { Chevron_downStyles } from './Chevron_down.styles';

const meta: Meta<typeof Chevron_down> = {
  title: 'Components/Chevron_down',
  component: Chevron_down,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevron_down>;

export const Default: Story = {
  args: {
    ...Chevron_downStyles,
  },
};
