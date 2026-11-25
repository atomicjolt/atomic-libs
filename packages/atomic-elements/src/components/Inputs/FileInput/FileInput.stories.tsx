import { Meta, StoryObj } from "@storybook/react-vite";
import { FileInput } from ".";
import { InputControls, LoadingArgTypes } from "@sb/helpers";

// FileInputProps omits isReadOnly, so leave it out of the shared controls.
const { isReadOnly: _isReadOnly, ...inputControls } = InputControls;

const meta: Meta<typeof FileInput> = {
  title: "Inputs/Choose State/FileInput",
  component: FileInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...inputControls,
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
    onChange: {
      action: "onChange",
      table: {
        category: "Events",
      },
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
  parameters: {
    docs: {
      source: {
        code: `<FileInput
  label="Choose a file..."
  file={new File(["test"], "test.txt")}
/>`,
      },
    },
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please choose a file",
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
