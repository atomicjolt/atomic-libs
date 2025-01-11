import { Meta, StoryObj } from "@storybook/react";
import {
  FieldStateControls,
  FocusEventsArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";
import { CheckBox } from ".";

const meta: Meta<typeof CheckBox> = {
  title: "Inputs/Choose State/Checkbox",
  component: CheckBox,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("CheckBox"),
  },
  argTypes: {
    ...FieldStateControls,
    ...RenderPropsArgTypes,
    ...FocusEventsArgTypes,
    error: {
      control: "text",
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
        category: "Field State",
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
