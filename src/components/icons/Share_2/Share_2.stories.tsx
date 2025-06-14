import type { Meta, StoryObj } from '@storybook/react';
import { Share_2 } from './Share_2';
import { Share_2Styles } from './Share_2.styles';

const meta: Meta<typeof Share_2> = {
  title: 'Components/Share_2',
  component: Share_2,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Share_2>;

export const Default: Story = {
  args: {
    ...Share_2Styles,
  },
};
