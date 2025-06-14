import type { Meta, StoryObj } from '@storybook/react';
import { Text_Subtitle } from './Text_Subtitle';
import { Text_SubtitleStyles } from './Text_Subtitle.styles';

const meta: Meta<typeof Text_Subtitle> = {
  title: 'Components/Text_Subtitle',
  component: Text_Subtitle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text_Subtitle>;

export const Default: Story = {
  args: {
    ...Text_SubtitleStyles,
  },
};
