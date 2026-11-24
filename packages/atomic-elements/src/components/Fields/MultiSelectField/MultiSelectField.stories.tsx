import { Meta, StoryObj } from "@storybook/react-vite";
import { FieldStateControls } from "@sb/helpers";
import { MultiSelectField } from ".";
import { dropdown, listbox } from "@styles/theme/component";
import { Label } from "../Atoms/Label";
import { Message } from "../Atoms/Message";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { Item } from "@components/Collection";
import { Button } from "@components/Buttons/Button";
import { MaterialIcon } from "@components/Icons/MaterialIcon";

export default {
  title: "Fields/MultiSelectField",
  component: MultiSelectField,
  parameters: {
    layout: "centered",
    cssprops: { dropdown, listbox },
  },
  argTypes: {
    // Not InputControls: MultiSelectField has no label / error / message props
    // (they're child components) and doesn't use placeholder.
    ...FieldStateControls,
    size: {
      table: { defaultValue: { summary: '"medium"' } },
    },
    selectedKeys: {
      control: "multi-select",
      description:
        "Control the value of the selected keys in a controlled component",
      options: ["1", "2", "3"],
    },
    defaultSelectedKeys: {
      control: false,
      description:
        "Control the value of the selected keys in an uncontrolled component",
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
      description: "Control the initial state of the menu",
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
} as Meta<typeof MultiSelectField>;

type Story = StoryObj<typeof MultiSelectField>;

export const Default: Story = {
  args: {
    children: [
      <Label key="label">Select an item</Label>,
      <Message key="message">Choose an item from the list</Message>,
      <Button key="button" variant="dropdown">
        Select Items
        <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
      </Button>,
      <Popover key="popover">
        <ListBox>
          <Item id="1">Item 1</Item>
          <Item id="2">Item 2</Item>
          <Item id="3">Item 3</Item>
        </ListBox>
      </Popover>,
      <ErrorMessage key="error">Something went wrong</ErrorMessage>,
    ],
  },
};
