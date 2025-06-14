import type { Meta, StoryObj } from '@storybook/react';
import { Variant_Alert } from './Variant_Alert';
import { Variant_AlertStyles } from './Variant_Alert.styles';

const meta: Meta<typeof Variant_Alert> = {
  title: 'Components/Variant_Alert',
  component: Variant_Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Variant_Alert>;

export const Default: Story = {
  args: {
    ...Variant_AlertStyles,
  },
};
