import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";
import buttonMeta from "../Button/Button.stories";
import { getCssProps } from "@sb/cssprops";
import { MaterialSymbol } from "@components/Icons/MaterialSymbol";

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Button"),
  },
  argTypes: {
    ...buttonMeta.argTypes,
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    children: <MaterialSymbol symbol="more_vert" />,
    isDisabled: false,
    "aria-label": "More options",
    isLoading: false,
    variant: "border",
  },
};

export const IsLoading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading...",
    loadingComplete: false,
  },
};
