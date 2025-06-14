import type { Meta, StoryObj } from '@storybook/react';
import { Hash } from './Hash';
import { HashStyles } from './Hash.styles';

const meta: Meta<typeof Hash> = {
  title: 'Components/Hash',
  component: Hash,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hash>;

export const Default: Story = {
  args: {
    ...HashStyles,
  },
};
