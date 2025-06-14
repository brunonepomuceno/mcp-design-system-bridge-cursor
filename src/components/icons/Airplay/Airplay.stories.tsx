import type { Meta, StoryObj } from '@storybook/react';
import { Airplay } from './Airplay';
import { AirplayStyles } from './Airplay.styles';

const meta: Meta<typeof Airplay> = {
  title: 'Components/Airplay',
  component: Airplay,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Airplay>;

export const Default: Story = {
  args: {
    ...AirplayStyles,
  },
};
