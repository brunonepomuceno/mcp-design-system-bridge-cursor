import type { Meta, StoryObj } from "@storybook/react";
import { SearchInput } from "./SearchInput";
import searchInputData from "./SearchInput.json";

const meta: Meta<typeof SearchInput> = {
  title: "Design System/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input.",
    },
    value: {
      control: "text",
      description: "The value of the input.",
    },
    onChange: {
      action: "changed",
      description: "Event handler for when the input value changes.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: searchInputData.label,
  },
};

export const WithValue: Story = {
  args: {
    placeholder: searchInputData.label,
    value: "Searching for components...",
  },
};
