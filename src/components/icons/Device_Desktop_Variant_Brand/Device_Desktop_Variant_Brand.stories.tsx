import type { Meta, StoryObj } from '@storybook/react';
import { Device_Desktop_Variant_Brand } from './Device_Desktop_Variant_Brand';
import { Device_Desktop_Variant_BrandStyles } from './Device_Desktop_Variant_Brand.styles';

const meta: Meta<typeof Device_Desktop_Variant_Brand> = {
  title: 'Components/Device_Desktop_Variant_Brand',
  component: Device_Desktop_Variant_Brand,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Device_Desktop_Variant_Brand>;

export const Default: Story = {
  args: {
    ...Device_Desktop_Variant_BrandStyles,
  },
};
