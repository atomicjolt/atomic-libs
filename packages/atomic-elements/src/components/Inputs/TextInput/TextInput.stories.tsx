import { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from ".";
import { TextInputControls, LoadingArgTypes } from "@sb/helpers";
import { input } from "@styles/theme/component";

const meta: Meta<typeof TextInput> = {
  title: "Inputs/User Input/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
    cssprops: { input },
  },
  argTypes: {
    ...TextInputControls,
    ...LoadingArgTypes,
    type: {
      control: "select",
      options: ["text", "password", "email", "tel", "url", "search"],
      description:
        "Type of the input element. For numbers, use `NumberInput` instead.",
      table: {
        defaultValue: { summary: '"text"' },
      },
    },
    size: {
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
    variant: {
      control: "select",
      options: ["default", "floating"],
      description:
        "Visual style of the input. `floating` shows the label inside the input, and moves it onto the top border once the input has a value or focus.",
      table: {
        defaultValue: { summary: '"default"' },
      },
    },
    minLength: {
      control: "number",
      description: "Minimum number of characters the value must have",
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters that can be entered",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    label: "Text input label",
  },
};

export const Floating: Story = {
  args: {
    ...Primary.args,
    variant: "floating",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
