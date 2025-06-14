import type { Meta, StoryObj } from '@storybook/react';
import { Cpu } from './Cpu';
import { CpuStyles } from './Cpu.styles';

const meta: Meta<typeof Cpu> = {
  title: 'Components/Cpu',
  component: Cpu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cpu>;

export const Default: Story = {
  args: {
    ...CpuStyles,
  },
};
