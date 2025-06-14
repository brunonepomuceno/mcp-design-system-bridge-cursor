import type { Meta, StoryObj } from '@storybook/react';
import { State_Default } from './State_Default';
import { State_DefaultStyles } from './State_Default.styles';

const meta: Meta<typeof State_Default> = {
  title: 'Components/State_Default',
  component: State_Default,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Default>;

export const Default: Story = {
  args: {
    ...State_DefaultStyles,
  },
};
