import type { Meta, StoryObj } from '@storybook/react';
import { Printer } from './Printer';
import { PrinterStyles } from './Printer.styles';

const meta: Meta<typeof Printer> = {
  title: 'Components/Printer',
  component: Printer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Printer>;

export const Default: Story = {
  args: {
    ...PrinterStyles,
  },
};
