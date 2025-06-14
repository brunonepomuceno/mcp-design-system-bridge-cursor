import type { Meta, StoryObj } from '@storybook/react';
import { Life_buoy } from './Life_buoy';
import { Life_buoyStyles } from './Life_buoy.styles';

const meta: Meta<typeof Life_buoy> = {
  title: 'Components/Life_buoy',
  component: Life_buoy,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Life_buoy>;

export const Default: Story = {
  args: {
    ...Life_buoyStyles,
  },
};
