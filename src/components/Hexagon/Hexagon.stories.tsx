import type { Meta, StoryObj } from '@storybook/react';
import { Hexagon } from './Hexagon';
import { HexagonStyles } from './Hexagon.styles';

const meta: Meta<typeof Hexagon> = {
  title: 'Components/Hexagon',
  component: Hexagon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hexagon>;

export const Default: Story = {
  args: {
    ...HexagonStyles,
  },
};
