import type { Meta, StoryObj } from '@storybook/react';
import { Text_Emphasis } from './Text_Emphasis';
import { Text_EmphasisStyles } from './Text_Emphasis.styles';

const meta: Meta<typeof Text_Emphasis> = {
  title: 'Components/Text_Emphasis',
  component: Text_Emphasis,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Emphasis>;

export const Default: Story = {
  args: {
    ...Text_EmphasisStyles,
  },
};
