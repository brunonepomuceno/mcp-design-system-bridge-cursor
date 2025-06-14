import type { Meta, StoryObj } from '@storybook/react';
import { Variant_Message } from './Variant_Message';
import { Variant_MessageStyles } from './Variant_Message.styles';

const meta: Meta<typeof Variant_Message> = {
  title: 'Components/Variant_Message',
  component: Variant_Message,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Variant_Message>;

export const Default: Story = {
  args: {
    ...Variant_MessageStyles,
  },
};
