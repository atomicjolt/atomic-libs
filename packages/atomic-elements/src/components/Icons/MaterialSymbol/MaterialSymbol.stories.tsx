import { Meta, StoryObj } from "@storybook/react-vite";
import { MaterialSymbol } from ".";

const meta: Meta<typeof MaterialSymbol> = {
  title: "Icons/MaterialSymbol",
  component: MaterialSymbol,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      table: { defaultValue: { summary: '"medium"' } },
    },
    isDisabled: {
      table: { defaultValue: { summary: "false" } },
    },
    isFocusable: {
      table: { defaultValue: { summary: "false" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MaterialSymbol>;

export const Primary: Story = {
  args: {
    symbol: "label",
    size: "large",
  },
};
