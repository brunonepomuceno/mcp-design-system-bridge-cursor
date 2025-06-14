import type { Meta, StoryObj } from '@storybook/react';
import { Package } from './Package';
import { PackageStyles } from './Package.styles';

const meta: Meta<typeof Package> = {
  title: 'Components/Package',
  component: Package,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Package>;

export const Default: Story = {
  args: {
    ...PackageStyles,
  },
};
