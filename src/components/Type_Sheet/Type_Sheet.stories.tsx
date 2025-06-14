import type { Meta, StoryObj } from '@storybook/react';
import { Type_Sheet } from './Type_Sheet';
import { Type_SheetStyles } from './Type_Sheet.styles';

const meta: Meta<typeof Type_Sheet> = {
  title: 'Components/Type_Sheet',
  component: Type_Sheet,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type_Sheet>;

export const Default: Story = {
  args: {
    ...Type_SheetStyles,
  },
};
