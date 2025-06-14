import type { Meta, StoryObj } from '@storybook/react';
import { Info } from './Info';
import { InfoStyles } from './Info.styles';

const meta: Meta<typeof Info> = {
  title: 'Components/Info',
  component: Info,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Info>;

export const Default: Story = {
  args: {
    ...InfoStyles,
  },
};
