import type { Meta, StoryObj } from '@storybook/react';
import { Text_Heading } from './Text_Heading';
import { Text_HeadingStyles } from './Text_Heading.styles';

const meta: Meta<typeof Text_Heading> = {
  title: 'Components/Text_Heading',
  component: Text_Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Heading>;

export const Default: Story = {
  args: {
    ...Text_HeadingStyles,
  },
};
