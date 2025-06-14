import type { Meta, StoryObj } from '@storybook/react';
import { Chevrons_down } from './Chevrons_down';
import { Chevrons_downStyles } from './Chevrons_down.styles';

const meta: Meta<typeof Chevrons_down> = {
  title: 'Components/Chevrons_down',
  component: Chevrons_down,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevrons_down>;

export const Default: Story = {
  args: {
    ...Chevrons_downStyles,
  },
};
