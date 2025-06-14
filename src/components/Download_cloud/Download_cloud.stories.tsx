import type { Meta, StoryObj } from '@storybook/react';
import { Download_cloud } from './Download_cloud';
import { Download_cloudStyles } from './Download_cloud.styles';

const meta: Meta<typeof Download_cloud> = {
  title: 'Components/Download_cloud',
  component: Download_cloud,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Download_cloud>;

export const Default: Story = {
  args: {
    ...Download_cloudStyles,
  },
};
