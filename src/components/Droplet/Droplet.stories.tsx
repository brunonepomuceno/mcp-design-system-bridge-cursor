import type { Meta, StoryObj } from '@storybook/react';
import { Droplet } from './Droplet';
import { DropletStyles } from './Droplet.styles';

const meta: Meta<typeof Droplet> = {
  title: 'Components/Droplet',
  component: Droplet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Droplet>;

export const Default: Story = {
  args: {
    ...DropletStyles,
  },
};
