import type { Meta, StoryObj } from '@storybook/react';
import { Menu_Shortcut } from './Menu_Shortcut';
import { Menu_ShortcutStyles } from './Menu_Shortcut.styles';

const meta: Meta<typeof Menu_Shortcut> = {
  title: 'Components/Menu_Shortcut',
  component: Menu_Shortcut,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu_Shortcut>;

export const Default: Story = {
  args: {
    ...Menu_ShortcutStyles,
  },
};
