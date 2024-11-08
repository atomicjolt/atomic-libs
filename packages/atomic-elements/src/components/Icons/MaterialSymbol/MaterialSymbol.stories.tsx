import { Meta, StoryObj } from "@storybook/react";
import { MaterialSymbol } from ".";

const meta: Meta<typeof MaterialSymbol> = {
  title: "Icons/MaterialSymbol",
  component: MaterialSymbol,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof MaterialSymbol>;

export const Primary: Story = {
  args: {
    symbol: "label",
    size: "large",
    variant: "outlined",
  },
};
