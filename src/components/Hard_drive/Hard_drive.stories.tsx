import type { Meta, StoryObj } from '@storybook/react';
import { Hard_drive } from './Hard_drive';
import { Hard_driveStyles } from './Hard_drive.styles';

const meta: Meta<typeof Hard_drive> = {
  title: 'Components/Hard_drive',
  component: Hard_drive,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hard_drive>;

export const Default: Story = {
  args: {
    ...Hard_driveStyles,
  },
};
