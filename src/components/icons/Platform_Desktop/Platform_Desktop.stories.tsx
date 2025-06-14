import type { Meta, StoryObj } from '@storybook/react';
import { Platform_Desktop } from './Platform_Desktop';
import { Platform_DesktopStyles } from './Platform_Desktop.styles';

const meta: Meta<typeof Platform_Desktop> = {
  title: 'Components/Platform_Desktop',
  component: Platform_Desktop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Platform_Desktop>;

export const Default: Story = {
  args: {
    ...Platform_DesktopStyles,
  },
};
