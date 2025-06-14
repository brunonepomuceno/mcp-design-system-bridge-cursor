import type { Meta, StoryObj } from '@storybook/react';
import { Panel_Image_Content } from './Panel_Image_Content';
import { Panel_Image_ContentStyles } from './Panel_Image_Content.styles';

const meta: Meta<typeof Panel_Image_Content> = {
  title: 'Components/Panel_Image_Content',
  component: Panel_Image_Content,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Panel_Image_Content>;

export const Default: Story = {
  args: {
    ...Panel_Image_ContentStyles,
  },
};
