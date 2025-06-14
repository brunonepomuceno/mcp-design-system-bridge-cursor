import type { Meta, StoryObj } from '@storybook/react';
import { Platform_Mobile_State_Open } from './Platform_Mobile_State_Open';
import { Platform_Mobile_State_OpenStyles } from './Platform_Mobile_State_Open.styles';

const meta: Meta<typeof Platform_Mobile_State_Open> = {
  title: 'Components/Platform_Mobile_State_Open',
  component: Platform_Mobile_State_Open,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Platform_Mobile_State_Open>;

export const Default: Story = {
  args: {
    ...Platform_Mobile_State_OpenStyles,
  },
};
