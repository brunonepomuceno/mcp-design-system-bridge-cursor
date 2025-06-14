import type { Meta, StoryObj } from '@storybook/react';
import { Filter } from './Filter';
import { FilterStyles } from './Filter.styles';

const meta: Meta<typeof Filter> = {
  title: 'Components/Filter',
  component: Filter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    ...FilterStyles,
  },
};
