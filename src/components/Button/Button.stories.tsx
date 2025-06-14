import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonStyles } from './Button.styles';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    ...ButtonStyles,
  },
};
