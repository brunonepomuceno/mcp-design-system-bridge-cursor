import type { Meta, StoryObj } from '@storybook/react';
import { Text_Title_Hero } from './Text_Title_Hero';
import { Text_Title_HeroStyles } from './Text_Title_Hero.styles';

const meta: Meta<typeof Text_Title_Hero> = {
  title: 'Components/Text_Title_Hero',
  component: Text_Title_Hero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Title_Hero>;

export const Default: Story = {
  args: {
    ...Text_Title_HeroStyles,
  },
};
