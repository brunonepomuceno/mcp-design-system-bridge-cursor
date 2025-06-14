import type { Meta, StoryObj } from '@storybook/react';
import { Disc } from './Disc';
import { DiscStyles } from './Disc.styles';

const meta: Meta<typeof Disc> = {
  title: 'Components/Disc',
  component: Disc,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Disc>;

export const Default: Story = {
  args: {
    ...DiscStyles,
  },
};
