import type { Meta, StoryObj } from '@storybook/react';
import { Log_out } from './Log_out';
import { Log_outStyles } from './Log_out.styles';

const meta: Meta<typeof Log_out> = {
  title: 'Components/Log_out',
  component: Log_out,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Log_out>;

export const Default: Story = {
  args: {
    ...Log_outStyles,
  },
};
