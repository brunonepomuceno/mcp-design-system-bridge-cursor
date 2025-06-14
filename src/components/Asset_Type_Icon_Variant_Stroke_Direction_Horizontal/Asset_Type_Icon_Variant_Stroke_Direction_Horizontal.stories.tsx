import type { Meta, StoryObj } from '@storybook/react';
import { Asset_Type_Icon_Variant_Stroke_Direction_Horizontal } from './Asset_Type_Icon_Variant_Stroke_Direction_Horizontal';
import { Asset_Type_Icon_Variant_Stroke_Direction_HorizontalStyles } from './Asset_Type_Icon_Variant_Stroke_Direction_Horizontal.styles';

const meta: Meta<typeof Asset_Type_Icon_Variant_Stroke_Direction_Horizontal> = {
  title: 'Components/Asset_Type_Icon_Variant_Stroke_Direction_Horizontal',
  component: Asset_Type_Icon_Variant_Stroke_Direction_Horizontal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Asset_Type_Icon_Variant_Stroke_Direction_Horizontal>;

export const Default: Story = {
  args: {
    ...Asset_Type_Icon_Variant_Stroke_Direction_HorizontalStyles,
  },
};
