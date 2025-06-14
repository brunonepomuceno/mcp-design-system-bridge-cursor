import type { Meta, StoryObj } from '@storybook/react';
import { Panel_Image } from './Panel_Image';
import { Panel_ImageStyles } from './Panel_Image.styles';

const meta: Meta<typeof Panel_Image> = {
  title: 'Components/Panel_Image',
  component: Panel_Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Panel_Image>;

export const Default: Story = {
  args: {
    ...Panel_ImageStyles,
  },
};
