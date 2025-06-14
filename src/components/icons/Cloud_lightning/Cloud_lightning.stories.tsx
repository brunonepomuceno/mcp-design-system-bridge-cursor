import type { Meta, StoryObj } from '@storybook/react';
import { Cloud_lightning } from './Cloud_lightning';
import { Cloud_lightningStyles } from './Cloud_lightning.styles';

const meta: Meta<typeof Cloud_lightning> = {
  title: 'Components/Cloud_lightning',
  component: Cloud_lightning,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Cloud_lightning>;

export const Default: Story = {
  args: {
    ...Cloud_lightningStyles,
  },
};
