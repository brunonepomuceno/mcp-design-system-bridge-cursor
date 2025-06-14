import type { Meta, StoryObj } from '@storybook/react';
import { Text_Title_Page } from './Text_Title_Page';
import { Text_Title_PageStyles } from './Text_Title_Page.styles';

const meta: Meta<typeof Text_Title_Page> = {
  title: 'Components/Text_Title_Page',
  component: Text_Title_Page,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Title_Page>;

export const Default: Story = {
  args: {
    ...Text_Title_PageStyles,
  },
};
