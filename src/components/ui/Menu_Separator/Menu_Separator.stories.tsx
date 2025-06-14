import type { Meta, StoryObj } from '@storybook/react';
import { Menu_Separator } from './Menu_Separator';
import { Menu_SeparatorStyles } from './Menu_Separator.styles';

const meta: Meta<typeof Menu_Separator> = {
  title: 'Components/Menu_Separator',
  component: Menu_Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu_Separator>;

export const Default: Story = {
  args: {
    ...Menu_SeparatorStyles,
  },
};
