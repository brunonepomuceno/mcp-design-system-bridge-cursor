import type { Meta, StoryObj } from '@storybook/react';
import { Text_Content_Heading } from './Text_Content_Heading';
import { Text_Content_HeadingStyles } from './Text_Content_Heading.styles';

const meta: Meta<typeof Text_Content_Heading> = {
  title: 'Components/Text_Content_Heading',
  component: Text_Content_Heading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Content_Heading>;

export const Default: Story = {
  args: {
    ...Text_Content_HeadingStyles,
  },
};
