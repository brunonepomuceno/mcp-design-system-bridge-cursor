import type { Meta, StoryObj } from '@storybook/react';
import { Maximize } from './Maximize';
import { MaximizeStyles } from './Maximize.styles';

const meta: Meta<typeof Maximize> = {
  title: 'Components/Maximize',
  component: Maximize,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Maximize>;

export const Default: Story = {
  args: {
    ...MaximizeStyles,
  },
};
