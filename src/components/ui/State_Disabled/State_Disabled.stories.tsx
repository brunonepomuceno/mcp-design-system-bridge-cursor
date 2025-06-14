import type { Meta, StoryObj } from '@storybook/react';
import { State_Disabled } from './State_Disabled';
import { State_DisabledStyles } from './State_Disabled.styles';

const meta: Meta<typeof State_Disabled> = {
  title: 'Components/State_Disabled',
  component: State_Disabled,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Disabled>;

export const Default: Story = {
  args: {
    ...State_DisabledStyles,
  },
};
