import type { Meta, StoryObj } from '@storybook/react';
import { State_Open } from './State_Open';
import { State_OpenStyles } from './State_Open.styles';

const meta: Meta<typeof State_Open> = {
  title: 'Components/State_Open',
  component: State_Open,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Open>;

export const Default: Story = {
  args: {
    ...State_OpenStyles,
  },
};
