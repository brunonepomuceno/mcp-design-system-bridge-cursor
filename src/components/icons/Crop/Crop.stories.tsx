import type { Meta, StoryObj } from '@storybook/react';
import { Crop } from './Crop';
import { CropStyles } from './Crop.styles';

const meta: Meta<typeof Crop> = {
  title: 'Components/Crop',
  component: Crop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Crop>;

export const Default: Story = {
  args: {
    ...CropStyles,
  },
};
