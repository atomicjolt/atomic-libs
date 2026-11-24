import { Meta, StoryObj } from "@storybook/react-vite";
import { InputControls } from "@sb/helpers";
import { Select } from ".";

// placeholder and isReadOnly are omitted from SelectProps: the native
// <select> has no placeholder or read-only state.
const {
  placeholder: _placeholder,
  isReadOnly: _isReadOnly,
  ...SelectInputControls
} = InputControls;

const meta: Meta<typeof Select> = {
  title: "Dropdowns/Selection/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: "select",
      options: ["value1", "value2", "value3"],
      description:
        "Value of the selected option (controlled). Passed to the native `<select>`.",
    },
    ...SelectInputControls,
    size: {
      table: { defaultValue: { summary: '"medium"' } },
    },
    isDisabled: {
      ...InputControls.isDisabled,
      table: {
        ...InputControls.isDisabled.table,
        defaultValue: { summary: "false" },
      },
    },
    isRequired: {
      ...InputControls.isRequired,
      table: {
        ...InputControls.isRequired.table,
        defaultValue: { summary: "false" },
      },
    },
    isInvalid: {
      ...InputControls.isInvalid,
      table: {
        ...InputControls.isInvalid.table,
        defaultValue: { summary: "false" },
      },
    },
    id: {
      table: { defaultValue: { summary: "auto-generated" } },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "Select label",
    children: [
      <option value="value1" key="1">
        Option 1
      </option>,
      <option value="value2" key="2">
        Option 2
      </option>,
      <option value="value3" key="3">
        Option 3
      </option>,
    ],
  },
};

export const Invalid: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please select an option",
  },
};
