import type { Meta, StoryObj } from '@storybook/react';
import { Frown } from './Frown';
import { FrownStyles } from './Frown.styles';

const meta: Meta<typeof Frown> = {
  title: 'Components/Frown',
  component: Frown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Frown>;

export const Default: Story = {
  args: {
    ...FrownStyles,
  },
};
