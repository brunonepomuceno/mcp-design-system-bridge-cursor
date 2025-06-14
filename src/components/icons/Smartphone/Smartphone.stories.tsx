import type { Meta, StoryObj } from '@storybook/react';
import { Smartphone } from './Smartphone';
import { SmartphoneStyles } from './Smartphone.styles';

const meta: Meta<typeof Smartphone> = {
  title: 'Components/Smartphone',
  component: Smartphone,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Smartphone>;

export const Default: Story = {
  args: {
    ...SmartphoneStyles,
  },
};
