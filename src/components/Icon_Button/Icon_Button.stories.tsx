import type { Meta, StoryObj } from '@storybook/react';
import { Icon_Button } from './Icon_Button';
import { Icon_ButtonStyles } from './Icon_Button.styles';

const meta: Meta<typeof Icon_Button> = {
  title: 'Components/Icon_Button',
  component: Icon_Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon_Button>;

export const Default: Story = {
  args: {
    ...Icon_ButtonStyles,
  },
};
