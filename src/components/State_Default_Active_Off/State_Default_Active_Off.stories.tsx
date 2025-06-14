import type { Meta, StoryObj } from '@storybook/react';
import { State_Default_Active_Off } from './State_Default_Active_Off';
import { State_Default_Active_OffStyles } from './State_Default_Active_Off.styles';

const meta: Meta<typeof State_Default_Active_Off> = {
  title: 'Components/State_Default_Active_Off',
  component: State_Default_Active_Off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Default_Active_Off>;

export const Default: Story = {
  args: {
    ...State_Default_Active_OffStyles,
  },
};
