import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SearchInput } from ".";
import { RenderPropsArgTypes, TextInputControls } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof SearchInput> = {
  title: "Inputs/User Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Input"),
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...TextInputControls,
    onSubmit: { control: false, table: { category: "Events" } },
    onChange: { control: false, table: { category: "Events" } },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  args: {
    label: "Search input label",
    onChange: fn(),
    onSubmit: fn(),
  },
};
