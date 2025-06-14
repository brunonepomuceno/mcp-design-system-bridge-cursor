import type { Meta, StoryObj } from '@storybook/react';
import { Copy } from './Copy';
import { CopyStyles } from './Copy.styles';

const meta: Meta<typeof Copy> = {
  title: 'Components/Copy',
  component: Copy,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Copy>;

export const Default: Story = {
  args: {
    ...CopyStyles,
  },
};
