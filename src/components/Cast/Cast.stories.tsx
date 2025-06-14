import type { Meta, StoryObj } from '@storybook/react';
import { Cast } from './Cast';
import { CastStyles } from './Cast.styles';

const meta: Meta<typeof Cast> = {
  title: 'Components/Cast',
  component: Cast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cast>;

export const Default: Story = {
  args: {
    ...CastStyles,
  },
};
