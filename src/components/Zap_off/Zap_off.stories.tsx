import type { Meta, StoryObj } from '@storybook/react';
import { Zap_off } from './Zap_off';
import { Zap_offStyles } from './Zap_off.styles';

const meta: Meta<typeof Zap_off> = {
  title: 'Components/Zap_off',
  component: Zap_off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Zap_off>;

export const Default: Story = {
  args: {
    ...Zap_offStyles,
  },
};
