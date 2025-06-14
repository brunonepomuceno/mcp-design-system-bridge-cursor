import type { Meta, StoryObj } from '@storybook/react';
import { Type_Documentation } from './Type_Documentation';
import { Type_DocumentationStyles } from './Type_Documentation.styles';

const meta: Meta<typeof Type_Documentation> = {
  title: 'Components/Type_Documentation',
  component: Type_Documentation,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Type_Documentation>;

export const Default: Story = {
  args: {
    ...Type_DocumentationStyles,
  },
};
