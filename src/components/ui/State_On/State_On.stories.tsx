import type { Meta, StoryObj } from '@storybook/react';
import { State_On } from './State_On';
import { State_OnStyles } from './State_On.styles';

const meta: Meta<typeof State_On> = {
  title: 'Components/State_On',
  component: State_On,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_On>;

export const Default: Story = {
  args: {
    ...State_OnStyles,
  },
};
