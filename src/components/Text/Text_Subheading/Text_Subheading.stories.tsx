import type { Meta, StoryObj } from '@storybook/react';
import { Text_Subheading } from './Text_Subheading';
import { Text_SubheadingStyles } from './Text_Subheading.styles';

const meta: Meta<typeof Text_Subheading> = {
  title: 'Components/Text_Subheading',
  component: Text_Subheading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Subheading>;

export const Default: Story = {
  args: {
    ...Text_SubheadingStyles,
  },
};
