import type { Meta, StoryObj } from '@storybook/react';
import { Panel_Image_Content_Reverse } from './Panel_Image_Content_Reverse';
import { Panel_Image_Content_ReverseStyles } from './Panel_Image_Content_Reverse.styles';

const meta: Meta<typeof Panel_Image_Content_Reverse> = {
  title: 'Components/Panel_Image_Content_Reverse',
  component: Panel_Image_Content_Reverse,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Panel_Image_Content_Reverse>;

export const Default: Story = {
  args: {
    ...Panel_Image_Content_ReverseStyles,
  },
};
