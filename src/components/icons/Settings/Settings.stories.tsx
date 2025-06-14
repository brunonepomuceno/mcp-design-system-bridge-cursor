import type { Meta, StoryObj } from '@storybook/react';
import { Settings } from './Settings';
import { SettingsStyles } from './Settings.styles';

const meta: Meta<typeof Settings> = {
  title: 'Components/Settings',
  component: Settings,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Settings>;

export const Default: Story = {
  args: {
    ...SettingsStyles,
  },
};
