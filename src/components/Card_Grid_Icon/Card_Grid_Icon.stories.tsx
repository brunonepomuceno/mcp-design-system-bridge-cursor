import type { Meta, StoryObj } from '@storybook/react';
import { Card_Grid_Icon } from './Card_Grid_Icon';
import { Card_Grid_IconStyles } from './Card_Grid_Icon.styles';

const meta: Meta<typeof Card_Grid_Icon> = {
  title: 'Components/Card_Grid_Icon',
  component: Card_Grid_Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card_Grid_Icon>;

export const Default: Story = {
  args: {
    ...Card_Grid_IconStyles,
  },
};
