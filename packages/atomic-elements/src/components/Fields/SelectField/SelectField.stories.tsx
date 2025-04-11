import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import {
  FieldStateControls,
  FocusEventsArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";
import { FieldLabel } from "../Field/FieldLabel";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { FieldErrorMessage } from "../Field/FieldError";
import { FieldMessage } from "../Field/FieldMessage";
import { Button } from "@components/Buttons/Button";
import { Item, Section } from "@components/Collection";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { SelectField as SelectField } from ".";

export default {
  title: "Fields/SelectField",
  component: SelectField,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Dropdown", "Listbox", "Button"),
  },
  argTypes: {
    ...FieldStateControls,
    ...RenderPropsArgTypes,
    ...FocusEventsArgTypes,
    selectedKey: {
      control: "select",
      description:
        "Control the value of the selected key in a controlled component",
      options: ["1", "2", "3", null],
    },
    defaultSelectedKey: {
      control: false,
      description:
        "Control the value of the selected key in an uncontrolled component",
    },
    children: {
      control: false,
    },
    isOpen: {
      control: "boolean",
      description: "Control the open state of the menu",
    },
    defaultOpen: {
      control: "boolean",
      description: "Control the inital state of the menu",
    },
    onOpenChange: {
      control: false,
      action: "onOpenChange",
      description: "Callback for when the menu is opened or closed",
      table: {
        category: "Events",
      },
    },
    onSelectionChange: {
      action: "onSelectionChange",
      control: false,
      description: "Callback for when the selection changes",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof SelectField>;

type Story = StoryObj<typeof SelectField>;

export const Primary: Story = {
  args: {
    onSelectionChange: fn(),
    onOpenChange: fn(),
    children: [
      <FieldLabel key="label">Select an item</FieldLabel>,
      <FieldMessage key="message">Choose an item from the list</FieldMessage>,
      <Button key="button" variant="dropdown">
        <SelectField.Value placeholder="Select an option" />
        <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
      </Button>,
      <Popover key="popover">
        <ListBox>
          <Item id="1">Item 1</Item>
          <Item id="2">Item 2</Item>
          <Item id="3">Item 3</Item>
        </ListBox>
      </Popover>,
      <FieldErrorMessage key="error">Something went wrong</FieldErrorMessage>,
    ],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      <FieldLabel key="label">Select an item</FieldLabel>,

      <FieldMessage key="message">Choose an item from the list</FieldMessage>,
      <Button key="button" variant="dropdown">
        <SelectField.Value placeholder="Select an option" />
        <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
      </Button>,
      <Popover key="popover">
        <ListBox>
          <Section title="Section 1">
            <Item id="1">Item 1</Item>
            <Item id="2">Item 2</Item>
          </Section>

          <Section title="Section 1">
            <Item id="3">Item 3</Item>
            <Item id="4">Item 4</Item>
          </Section>
        </ListBox>
      </Popover>,
    ],
  },
};
