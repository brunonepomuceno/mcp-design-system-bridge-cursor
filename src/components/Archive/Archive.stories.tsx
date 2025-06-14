import type { Meta, StoryObj } from '@storybook/react';
import { Archive } from './Archive';
import { ArchiveStyles } from './Archive.styles';

const meta: Meta<typeof Archive> = {
  title: 'Components/Archive',
  component: Archive,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Archive>;

export const Default: Story = {
  args: {
    ...ArchiveStyles,
  },
};
