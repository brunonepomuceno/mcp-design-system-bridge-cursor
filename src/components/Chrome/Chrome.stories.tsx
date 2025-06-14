import type { Meta, StoryObj } from '@storybook/react';
import { Chrome } from './Chrome';
import { ChromeStyles } from './Chrome.styles';

const meta: Meta<typeof Chrome> = {
  title: 'Components/Chrome',
  component: Chrome,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chrome>;

export const Default: Story = {
  args: {
    ...ChromeStyles,
  },
};
