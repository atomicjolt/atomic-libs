import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { SearchInput } from ".";
import {
  RenderStylePropsArgTypes,
  TextInputControls,
  LoadingArgTypes,
} from "@sb/helpers";
import { input } from "@styles/theme/component";

const meta: Meta<typeof SearchInput> = {
  title: "Inputs/User Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
    cssprops: { input },
  },
  argTypes: {
    // SearchInput renders its own children and has no `style` prop.
    className: RenderStylePropsArgTypes.className,
    ...TextInputControls,
    ...LoadingArgTypes,
    size: {
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
    onSubmit: {
      control: false,
      description:
        "Called with the current value when the user presses Enter or the search button",
      table: { category: "Events" },
    },
    onChange: {
      control: false,
      description: "Called with the new value when the text changes",
      table: { category: "Events" },
    },
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
