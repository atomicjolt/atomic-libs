import { Meta, StoryObj } from "@storybook/react-vite";
import {
  FieldStateControls,
  FocusEventsArgTypes,
  RenderPropsArgTypes,
  LoadingArgTypes,
} from "@sb/helpers";
import { checkbox } from "@styles/theme/component";
import { CheckBox } from ".";

const meta: Meta<typeof CheckBox> = {
  title: "Inputs/Choose State/CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
    cssprops: { checkbox },
  },
  argTypes: {
    ...FieldStateControls,
    ...LoadingArgTypes,
    ...RenderPropsArgTypes,
    ...FocusEventsArgTypes,
    children: {
      ...RenderPropsArgTypes.children,
      control: "text",
      description: "Label rendered next to the checkbox",
    },
    error: {
      control: "text",
      description: "Error message, shown when the checkbox is invalid.",
      table: {
        category: "Helper Text",
      },
    },
    message: {
      control: "text",
      table: {
        category: "Helper Text",
      },
    },
    isReadOnly: {
      table: {
        category: "State",
        defaultValue: { summary: "false" },
      },
    },
    isRequired: {
      ...FieldStateControls.isRequired,
      table: {
        ...FieldStateControls.isRequired?.table,
        defaultValue: { summary: "false" },
      },
    },
    isInvalid: {
      ...FieldStateControls.isInvalid,
      table: {
        ...FieldStateControls.isInvalid?.table,
        defaultValue: { summary: "false" },
      },
    },
    isDisabled: {
      ...FieldStateControls.isDisabled,
      table: {
        ...FieldStateControls.isDisabled?.table,
        defaultValue: { summary: "false" },
      },
    },
    defaultSelected: {
      type: "boolean",
      description:
        "Default selected state of the checkbox in an uncontrolled component.",
    },
    isSelected: {
      type: "boolean",
      description: "Selected state of the checkbox in a controlled component.",
    },
    isIndeterminate: {
      type: "boolean",
      description:
        "Indeterminate state of the checkbox. When true, the checkbox will always be displayed in an indeterminate state, regardless of the selected state.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      action: "onChange",
      description:
        "Callback function that is called when the checkbox value changes.",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    children: "Checkbox Label",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};

export const Indeterminate: Story = {
  args: {
    ...Primary.args,
    isIndeterminate: true,
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "You must accept the terms",
  },
};
