import type { Meta, StoryObj } from '@storybook/react';
import { Database } from './Database';
import { DatabaseStyles } from './Database.styles';

const meta: Meta<typeof Database> = {
  title: 'Components/Database',
  component: Database,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Database>;

export const Default: Story = {
  args: {
    ...DatabaseStyles,
  },
};
