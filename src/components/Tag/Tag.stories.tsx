import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import { TagStyles } from './Tag.styles';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    ...TagStyles,
  },
};
