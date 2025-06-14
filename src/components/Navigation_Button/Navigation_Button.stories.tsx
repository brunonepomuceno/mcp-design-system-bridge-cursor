import type { Meta, StoryObj } from '@storybook/react';
import { Navigation_Button } from './Navigation_Button';
import { Navigation_ButtonStyles } from './Navigation_Button.styles';

const meta: Meta<typeof Navigation_Button> = {
  title: 'Components/Navigation_Button',
  component: Navigation_Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation_Button>;

export const Default: Story = {
  args: {
    ...Navigation_ButtonStyles,
  },
};
