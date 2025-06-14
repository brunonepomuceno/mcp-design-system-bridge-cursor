import type { Meta, StoryObj } from '@storybook/react';
import { Slash } from './Slash';
import { SlashStyles } from './Slash.styles';

const meta: Meta<typeof Slash> = {
  title: 'Components/Slash',
  component: Slash,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slash>;

export const Default: Story = {
  args: {
    ...SlashStyles,
  },
};
