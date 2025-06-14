import type { Meta, StoryObj } from '@storybook/react';
import { Paperclip } from './Paperclip';
import { PaperclipStyles } from './Paperclip.styles';

const meta: Meta<typeof Paperclip> = {
  title: 'Components/Paperclip',
  component: Paperclip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Paperclip>;

export const Default: Story = {
  args: {
    ...PaperclipStyles,
  },
};
