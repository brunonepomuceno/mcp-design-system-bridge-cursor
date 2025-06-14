import type { Meta, StoryObj } from '@storybook/react';
import { Text_Content_Title } from './Text_Content_Title';
import { Text_Content_TitleStyles } from './Text_Content_Title.styles';

const meta: Meta<typeof Text_Content_Title> = {
  title: 'Components/Text_Content_Title',
  component: Text_Content_Title,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Content_Title>;

export const Default: Story = {
  args: {
    ...Text_Content_TitleStyles,
  },
};
