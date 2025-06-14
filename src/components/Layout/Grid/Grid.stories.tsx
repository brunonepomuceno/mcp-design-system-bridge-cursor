import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { GridStyles } from './Grid.styles';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    ...GridStyles,
  },
};
