import type { Meta, StoryObj } from '@storybook/react';
import { Panel_Image_Double } from './Panel_Image_Double';
import { Panel_Image_DoubleStyles } from './Panel_Image_Double.styles';

const meta: Meta<typeof Panel_Image_Double> = {
  title: 'Components/Panel_Image_Double',
  component: Panel_Image_Double,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Panel_Image_Double>;

export const Default: Story = {
  args: {
    ...Panel_Image_DoubleStyles,
  },
};
