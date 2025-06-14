import type { Meta, StoryObj } from '@storybook/react';
import { Fast_forward } from './Fast_forward';
import { Fast_forwardStyles } from './Fast_forward.styles';

const meta: Meta<typeof Fast_forward> = {
  title: 'Components/Fast_forward',
  component: Fast_forward,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Fast_forward>;

export const Default: Story = {
  args: {
    ...Fast_forwardStyles,
  },
};
