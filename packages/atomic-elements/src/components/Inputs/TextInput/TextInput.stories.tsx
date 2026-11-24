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
      options: ["text", "password", "email", "tel", "number", "search"],
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
      table: {
        defaultValue: { summary: '"default"' },
      },
    },
    minLength: { control: "number" },
    maxLength: { control: "number" },
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
