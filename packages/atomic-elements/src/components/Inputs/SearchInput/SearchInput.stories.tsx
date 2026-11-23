import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { SearchInput } from ".";
import { RenderPropsArgTypes, TextInputControls } from "@sb/helpers";
import { input } from "@styles/theme/component";

const meta: Meta<typeof SearchInput> = {
  title: "Inputs/User Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
    cssprops: { input },
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

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
