import type { Meta, StoryObj } from '@storybook/react';
import { Platform_Mobile_State_Default } from './Platform_Mobile_State_Default';
import { Platform_Mobile_State_DefaultStyles } from './Platform_Mobile_State_Default.styles';

const meta: Meta<typeof Platform_Mobile_State_Default> = {
  title: 'Components/Platform_Mobile_State_Default',
  component: Platform_Mobile_State_Default,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Platform_Mobile_State_Default>;

export const Default: Story = {
  args: {
    ...Platform_Mobile_State_DefaultStyles,
  },
};
