import type { Meta, StoryObj } from '@storybook/react';
import { Chevron_up } from './Chevron_up';
import { Chevron_upStyles } from './Chevron_up.styles';

const meta: Meta<typeof Chevron_up> = {
  title: 'Components/Chevron_up',
  component: Chevron_up,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevron_up>;

export const Default: Story = {
  args: {
    ...Chevron_upStyles,
  },
};
