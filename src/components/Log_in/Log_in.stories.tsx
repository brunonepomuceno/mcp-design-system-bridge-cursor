import type { Meta, StoryObj } from '@storybook/react';
import { Log_in } from './Log_in';
import { Log_inStyles } from './Log_in.styles';

const meta: Meta<typeof Log_in> = {
  title: 'Components/Log_in',
  component: Log_in,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Log_in>;

export const Default: Story = {
  args: {
    ...Log_inStyles,
  },
};
