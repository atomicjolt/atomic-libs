import { Meta, StoryObj } from "@storybook/react-vite";
import { ComboBoxField } from ".";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { ComboInput } from "../ComboInput";
import { IconButton } from "@components/Buttons/IconButton";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { Item } from "@components/Collection";
import { Message } from "../Atoms/Message";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import {
  FieldStateControls,
  RenderPropsArgTypes,
  LoadingArgTypes,
} from "@sb/helpers";
import { fn } from "storybook/test";

export default {
  title: "Fields/ComboBoxField",
  component: ComboBoxField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    ...LoadingArgTypes,
    ...RenderPropsArgTypes,
    size: {
      table: { defaultValue: { summary: '"medium"' } },
    },
    selectedKey: {
      control: "select",
      options: ["item1", "item2", "item3", "item4", "item5"],
      description: "Key of the selected item (controlled).",
      table: { category: "Selection" },
    },
    defaultSelectedKey: {
      control: "select",
      options: ["item1", "item2", "item3", "item4", "item5"],
      description: "Key of the initially selected item (uncontrolled).",
      table: { category: "Selection" },
    },
    menuTrigger: {
      control: "select",
      options: ["input", "focus", "manual"],
    },
  },
} as Meta<typeof ComboBoxField>;

type Story = StoryObj<typeof ComboBoxField>;

export const Primary: Story = {
  args: {
    onInputChange: fn(),
    onOpenChange: fn(),
    onSelectionChange: fn(),
    menuTrigger: "focus",
    children: [
      <Label key="label">Label</Label>,
      <Message key="message">Message</Message>,
      <Input key="input" />,
      <ErrorMessage key="error">Error</ErrorMessage>,
      <Popover key="popover">
        <ListBox>
          <Item key="item1">Item 1</Item>
          <Item key="item2">Item 2</Item>
          <Item key="item3">Item 3</Item>
          <Item key="item4">Item 4</Item>
          <Item key="item5">Item 5</Item>
        </ListBox>
      </Popover>,
    ],
  },
};

export const WithTriggerButton: Story = {
  args: {
    ...Primary.args,
    menuTrigger: "input",
    children: [
      <Label key="label">Label</Label>,
      <ComboInput key="input">
        <Input />
        <IconButton icon="arrow_drop_down" variant="ghost" />
      </ComboInput>,
      <Popover key="popover">
        <ListBox>
          <Item key="item1">Item 1</Item>
          <Item key="item2">Item 2</Item>
          <Item key="item3">Item 3</Item>
          <Item key="item4">Item 4</Item>
          <Item key="item5">Item 5</Item>
        </ListBox>
      </Popover>,
    ],
  },
};
