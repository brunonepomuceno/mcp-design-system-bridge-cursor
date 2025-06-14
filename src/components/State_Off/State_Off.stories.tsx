import type { Meta, StoryObj } from '@storybook/react';
import { State_Off } from './State_Off';
import { State_OffStyles } from './State_Off.styles';

const meta: Meta<typeof State_Off> = {
  title: 'Components/State_Off',
  component: State_Off,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof State_Off>;

export const Default: Story = {
  args: {
    ...State_OffStyles,
  },
};
