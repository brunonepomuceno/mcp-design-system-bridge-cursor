import type { Meta, StoryObj } from '@storybook/react';
import { Asset_Type_Image_Variant_Stroke_Direction_Vertical } from './Asset_Type_Image_Variant_Stroke_Direction_Vertical';
import { Asset_Type_Image_Variant_Stroke_Direction_VerticalStyles } from './Asset_Type_Image_Variant_Stroke_Direction_Vertical.styles';

const meta: Meta<typeof Asset_Type_Image_Variant_Stroke_Direction_Vertical> = {
  title: 'Components/Asset_Type_Image_Variant_Stroke_Direction_Vertical',
  component: Asset_Type_Image_Variant_Stroke_Direction_Vertical,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Asset_Type_Image_Variant_Stroke_Direction_Vertical>;

export const Default: Story = {
  args: {
    ...Asset_Type_Image_Variant_Stroke_Direction_VerticalStyles,
  },
};
