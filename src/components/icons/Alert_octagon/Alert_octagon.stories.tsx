import type { Meta, StoryObj } from '@storybook/react';
import { Alert_octagon } from './Alert_octagon';
import { Alert_octagonStyles } from './Alert_octagon.styles';

const meta: Meta<typeof Alert_octagon> = {
  title: 'Components/Alert_octagon',
  component: Alert_octagon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert_octagon>;

export const Default: Story = {
  args: {
    ...Alert_octagonStyles,
  },
};
