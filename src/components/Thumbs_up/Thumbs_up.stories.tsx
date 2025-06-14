import type { Meta, StoryObj } from '@storybook/react';
import { Thumbs_up } from './Thumbs_up';
import { Thumbs_upStyles } from './Thumbs_up.styles';

const meta: Meta<typeof Thumbs_up> = {
  title: 'Components/Thumbs_up',
  component: Thumbs_up,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Thumbs_up>;

export const Default: Story = {
  args: {
    ...Thumbs_upStyles,
  },
};
