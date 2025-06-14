import type { Meta, StoryObj } from '@storybook/react';
import { Zap } from './Zap';
import { ZapStyles } from './Zap.styles';

const meta: Meta<typeof Zap> = {
  title: 'Components/Zap',
  component: Zap,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Zap>;

export const Default: Story = {
  args: {
    ...ZapStyles,
  },
};
