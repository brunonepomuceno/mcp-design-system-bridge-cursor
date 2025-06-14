import type { Meta, StoryObj } from '@storybook/react';
import { Plus } from './Plus';
import { PlusStyles } from './Plus.styles';

const meta: Meta<typeof Plus> = {
  title: 'Components/Plus',
  component: Plus,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Plus>;

export const Default: Story = {
  args: {
    ...PlusStyles,
  },
};
