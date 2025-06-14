import type { Meta, StoryObj } from '@storybook/react';
import { Page_Product } from './Page_Product';
import { Page_ProductStyles } from './Page_Product.styles';

const meta: Meta<typeof Page_Product> = {
  title: 'Components/Page_Product',
  component: Page_Product,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Page_Product>;

export const Default: Story = {
  args: {
    ...Page_ProductStyles,
  },
};
