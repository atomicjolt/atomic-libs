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
      description: "Size of the icon",
      table: { defaultValue: { summary: '"medium"' } },
    },
    isDisabled: {
      description: "Applies disabled styling (`data-disabled`)",
      table: { defaultValue: { summary: "false" } },
    },
    isFocusable: {
      description: "Makes the icon focusable",
      table: { defaultValue: { summary: "false" } },
    },
    fill: {
      control: { type: "range", min: 0, max: 1, step: 0.1 },
    },
    weight: {
      control: { type: "range", min: 100, max: 700, step: 100 },
    },
    grade: {
      control: { type: "range", min: -25, max: 200, step: 1 },
    },
    opticalSize: {
      control: { type: "range", min: 20, max: 48, step: 1 },
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
