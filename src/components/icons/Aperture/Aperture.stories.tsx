import type { Meta, StoryObj } from '@storybook/react';
import { Aperture } from './Aperture';
import { ApertureStyles } from './Aperture.styles';

const meta: Meta<typeof Aperture> = {
  title: 'Components/Aperture',
  component: Aperture,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Aperture>;

export const Default: Story = {
  args: {
    ...ApertureStyles,
  },
};
