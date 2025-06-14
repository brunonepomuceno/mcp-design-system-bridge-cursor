import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { TooltipStyles } from './Tooltip.styles';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    ...TooltipStyles,
  },
};
