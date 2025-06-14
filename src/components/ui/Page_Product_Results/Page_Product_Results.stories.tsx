import type { Meta, StoryObj } from '@storybook/react';
import { Page_Product_Results } from './Page_Product_Results';
import { Page_Product_ResultsStyles } from './Page_Product_Results.styles';

const meta: Meta<typeof Page_Product_Results> = {
  title: 'Components/Page_Product_Results',
  component: Page_Product_Results,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page_Product_Results>;

export const Default: Story = {
  args: {
    ...Page_Product_ResultsStyles,
  },
};
