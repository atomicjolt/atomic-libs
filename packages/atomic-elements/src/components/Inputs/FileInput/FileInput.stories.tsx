import { Meta, StoryObj } from "@storybook/react-vite";
import { FileInput } from ".";
import { InputControls, LoadingArgTypes } from "@sb/helpers";

const meta: Meta<typeof FileInput> = {
  title: "Inputs/Choose State/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...InputControls,
    ...LoadingArgTypes,
    size: {
      table: {
        defaultValue: { summary: '"medium"' },
      },
    },
    isDisabled: {
      ...InputControls.isDisabled,
      table: {
        ...InputControls.isDisabled?.table,
        defaultValue: { summary: "false" },
      },
    },
    isRequired: {
      ...InputControls.isRequired,
      table: {
        ...InputControls.isRequired?.table,
        defaultValue: { summary: "false" },
      },
    },
    isInvalid: {
      ...InputControls.isInvalid,
      table: {
        ...InputControls.isInvalid?.table,
        defaultValue: { summary: "false" },
      },
    },
    file: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Primary: Story = {
  args: {
    label: "Choose a file...",
  },
};

export const WithFile: Story = {
  args: {
    ...Primary.args,
    file: new File(["test"], "test.txt"),
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
