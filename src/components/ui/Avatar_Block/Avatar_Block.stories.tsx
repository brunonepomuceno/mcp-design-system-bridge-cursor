import type { Meta, StoryObj } from '@storybook/react';
import { Avatar_Block } from './Avatar_Block';
import { Avatar_BlockStyles } from './Avatar_Block.styles';

const meta: Meta<typeof Avatar_Block> = {
  title: 'Components/Avatar_Block',
  component: Avatar_Block,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Avatar_Block>;

export const Default: Story = {
  args: {
    ...Avatar_BlockStyles,
  },
};
