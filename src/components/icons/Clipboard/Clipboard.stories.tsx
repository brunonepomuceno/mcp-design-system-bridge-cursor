import type { Meta, StoryObj } from '@storybook/react';
import { Clipboard } from './Clipboard';
import { ClipboardStyles } from './Clipboard.styles';

const meta: Meta<typeof Clipboard> = {
  title: 'Components/Clipboard',
  component: Clipboard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Clipboard>;

export const Default: Story = {
  args: {
    ...ClipboardStyles,
  },
};
