import type { Meta, StoryObj } from '@storybook/react';
import { Globe } from './Globe';
import { GlobeStyles } from './Globe.styles';

const meta: Meta<typeof Globe> = {
  title: 'Components/Globe',
  component: Globe,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Globe>;

export const Default: Story = {
  args: {
    ...GlobeStyles,
  },
};
