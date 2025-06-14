import type { Meta, StoryObj } from '@storybook/react';
import { Chevrons_up } from './Chevrons_up';
import { Chevrons_upStyles } from './Chevrons_up.styles';

const meta: Meta<typeof Chevrons_up> = {
  title: 'Components/Chevrons_up',
  component: Chevrons_up,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Chevrons_up>;

export const Default: Story = {
  args: {
    ...Chevrons_upStyles,
  },
};
