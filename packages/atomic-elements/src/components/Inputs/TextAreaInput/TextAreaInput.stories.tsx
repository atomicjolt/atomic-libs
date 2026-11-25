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
    size: {
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
    onChange: {
      action: "changed",
      description: "Called with the new value when the text changes",
      table: { category: "Events" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextAreaInput>;

export const Primary: Story = {
  args: {
    defaultValue: "Textarea content",
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
