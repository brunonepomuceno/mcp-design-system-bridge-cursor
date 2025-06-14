import type { Meta, StoryObj } from '@storybook/react';
import { Map } from './Map';
import { MapStyles } from './Map.styles';

const meta: Meta<typeof Map> = {
  title: 'Components/Map',
  component: Map,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  args: {
    ...MapStyles,
  },
};
