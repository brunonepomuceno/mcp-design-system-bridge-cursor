import type { Meta, StoryObj } from '@storybook/react';
import { Pocket } from './Pocket';
import { PocketStyles } from './Pocket.styles';

const meta: Meta<typeof Pocket> = {
  title: 'Components/Pocket',
  component: Pocket,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pocket>;

export const Default: Story = {
  args: {
    ...PocketStyles,
  },
};
