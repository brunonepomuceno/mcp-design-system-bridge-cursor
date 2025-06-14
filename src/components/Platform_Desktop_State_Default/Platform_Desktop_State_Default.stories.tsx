import type { Meta, StoryObj } from '@storybook/react';
import { Platform_Desktop_State_Default } from './Platform_Desktop_State_Default';
import { Platform_Desktop_State_DefaultStyles } from './Platform_Desktop_State_Default.styles';

const meta: Meta<typeof Platform_Desktop_State_Default> = {
  title: 'Components/Platform_Desktop_State_Default',
  component: Platform_Desktop_State_Default,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Platform_Desktop_State_Default>;

export const Default: Story = {
  args: {
    ...Platform_Desktop_State_DefaultStyles,
  },
};
