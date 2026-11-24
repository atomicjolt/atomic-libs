import { Meta, StoryObj } from "@storybook/react-vite";
import { TextAreaInput } from ".";
import { TextInputControls, LoadingArgTypes } from "@sb/helpers";
import { input, textarea } from "@styles/theme/component";

const meta: Meta<typeof TextAreaInput> = {
  title: "Inputs/User Input/TextAreaInput",
  component: TextAreaInput,
  parameters: {
    cssprops: { input, textarea },
  },
  argTypes: {
    ...TextInputControls,
    ...LoadingArgTypes,
    onChange: { action: "changed", table: { category: "Events" } },
  },
};

export default meta;

type Story = StoryObj<typeof TextAreaInput>;

export const Primary: Story = {
  args: {
    defaultValue: "Textarea content",
    resize: "both",
    size: "full",
    label: "Textarea label",
    message: "1000 characters",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
