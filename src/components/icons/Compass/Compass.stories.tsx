import type { Meta, StoryObj } from '@storybook/react';
import { Compass } from './Compass';
import { CompassStyles } from './Compass.styles';

const meta: Meta<typeof Compass> = {
  title: 'Components/Compass',
  component: Compass,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Compass>;

export const Default: Story = {
  args: {
    ...CompassStyles,
  },
};
