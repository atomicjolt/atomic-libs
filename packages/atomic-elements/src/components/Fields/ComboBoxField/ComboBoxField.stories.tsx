import { Meta, StoryObj } from "@storybook/react";
import { ComboBoxField } from ".";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { Item } from "@components/Collection";
import { Message } from "../Atoms/Message";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { FieldStateControls, RenderPropsArgTypes } from "@sb/helpers";
import { fn } from "@storybook/test";

export default {
  title: "Fields/ComboBoxField",
  component: ComboBoxField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    ...RenderPropsArgTypes,
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
