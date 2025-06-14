import type { Meta, StoryObj } from '@storybook/react';
import { Sunrise } from './Sunrise';
import { SunriseStyles } from './Sunrise.styles';

const meta: Meta<typeof Sunrise> = {
  title: 'Components/Sunrise',
  component: Sunrise,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Sunrise>;

export const Default: Story = {
  args: {
    ...SunriseStyles,
  },
};
