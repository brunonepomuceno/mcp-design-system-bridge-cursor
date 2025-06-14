import type { Meta, StoryObj } from '@storybook/react';
import { Delete } from './Delete';
import { DeleteStyles } from './Delete.styles';

const meta: Meta<typeof Delete> = {
  title: 'Components/Delete',
  component: Delete,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Delete>;

export const Default: Story = {
  args: {
    ...DeleteStyles,
  },
};
