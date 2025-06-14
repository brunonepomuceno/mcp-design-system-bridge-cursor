import type { Meta, StoryObj } from '@storybook/react';
import { Upload_cloud } from './Upload_cloud';
import { Upload_cloudStyles } from './Upload_cloud.styles';

const meta: Meta<typeof Upload_cloud> = {
  title: 'Components/Upload_cloud',
  component: Upload_cloud,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Upload_cloud>;

export const Default: Story = {
  args: {
    ...Upload_cloudStyles,
  },
};
