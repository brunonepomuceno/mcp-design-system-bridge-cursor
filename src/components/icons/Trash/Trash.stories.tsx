import type { Meta, StoryObj } from '@storybook/react';
import { Trash } from './Trash';
import { TrashStyles } from './Trash.styles';

const meta: Meta<typeof Trash> = {
  title: 'Components/Trash',
  component: Trash,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Trash>;

export const Default: Story = {
  args: {
    ...TrashStyles,
  },
};
