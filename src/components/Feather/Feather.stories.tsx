import type { Meta, StoryObj } from '@storybook/react';
import { Feather } from './Feather';
import { FeatherStyles } from './Feather.styles';

const meta: Meta<typeof Feather> = {
  title: 'Components/Feather',
  component: Feather,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Feather>;

export const Default: Story = {
  args: {
    ...FeatherStyles,
  },
};
