import type { Meta, StoryObj } from '@storybook/react';
import { Download } from './Download';
import { DownloadStyles } from './Download.styles';

const meta: Meta<typeof Download> = {
  title: 'Components/Download',
  component: Download,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Download>;

export const Default: Story = {
  args: {
    ...DownloadStyles,
  },
};
