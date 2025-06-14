import type { Meta, StoryObj } from '@storybook/react';
import { Circle } from './Circle';
import { CircleStyles } from './Circle.styles';

const meta: Meta<typeof Circle> = {
  title: 'Components/Circle',
  component: Circle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Circle>;

export const Default: Story = {
  args: {
    ...CircleStyles,
  },
};
