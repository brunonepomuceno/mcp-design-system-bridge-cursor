import type { Meta, StoryObj } from '@storybook/react';
import { State_Default_Active_On } from './State_Default_Active_On';
import { State_Default_Active_OnStyles } from './State_Default_Active_On.styles';

const meta: Meta<typeof State_Default_Active_On> = {
  title: 'Components/State_Default_Active_On',
  component: State_Default_Active_On,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Default_Active_On>;

export const Default: Story = {
  args: {
    ...State_Default_Active_OnStyles,
  },
};
