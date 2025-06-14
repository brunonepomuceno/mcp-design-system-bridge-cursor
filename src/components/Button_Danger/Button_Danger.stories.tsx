import type { Meta, StoryObj } from '@storybook/react';
import { Button_Danger } from './Button_Danger';
import { Button_DangerStyles } from './Button_Danger.styles';

const meta: Meta<typeof Button_Danger> = {
  title: 'Components/Button_Danger',
  component: Button_Danger,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button_Danger>;

export const Default: Story = {
  args: {
    ...Button_DangerStyles,
  },
};
