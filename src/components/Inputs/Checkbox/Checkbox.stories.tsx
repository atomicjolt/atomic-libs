import { Meta, StoryObj } from "@storybook/react";
import { InputControls } from "@sb/helpers";
import { CheckBox } from ".";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof CheckBox> = {
  title: "Inputs/Choose State/Checkbox",
  component: CheckBox,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Choose"),
  },
  argTypes: {
    ...InputControls,
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
  },
};

export default meta;

type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    children: "Checkbox Label",
  },
};
