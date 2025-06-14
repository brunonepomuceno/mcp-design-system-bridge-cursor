import type { Meta, StoryObj } from '@storybook/react';
import { Film } from './Film';
import { FilmStyles } from './Film.styles';

const meta: Meta<typeof Film> = {
  title: 'Components/Film',
  component: Film,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Film>;

export const Default: Story = {
  args: {
    ...FilmStyles,
  },
};
