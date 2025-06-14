import type { Meta, StoryObj } from '@storybook/react';
import { Hero_Actions } from './Hero_Actions';
import { Hero_ActionsStyles } from './Hero_Actions.styles';

const meta: Meta<typeof Hero_Actions> = {
  title: 'Components/Hero_Actions',
  component: Hero_Actions,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero_Actions>;

export const Default: Story = {
  args: {
    ...Hero_ActionsStyles,
  },
};
