import { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from ".";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Item } from "../../Collection";
import { IconMenu } from "../../Dropdowns/IconMenu";

const meta: Meta<typeof ButtonGroup> = {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isDisabled: {
      control: "boolean",
      description:
        "Disables all of the buttons in the group. Can be overridden by the individual buttons.",
    },
    variant: {
      control: "select",
      description:
        "Sets the variant for all of the buttons in the group. Can be overridden by the individual buttons.",
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
        "border",
        "ghost",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Primary: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Primary</Button>
      <Button>Secondary</Button>
    </ButtonGroup>
  ),
  args: {
    gap: 8,
    isMerged: false,
    isDisabled: false,
    direction: "row",
  },
};

export const MergedGroup: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Primary</Button>
      <Button>Secondary</Button>
      <IconButton icon="add" />
    </ButtonGroup>
  ),
  args: {
    ...Primary.args,
    variant: "border",
    isMerged: true,
  },
};

export const WithIconMenu: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>New Item</Button>
      <Button>Edit Item</Button>
      <IconMenu icon="delete">
        <Item>Soft Delete</Item>
        <Item>Hard Delete</Item>
      </IconMenu>
    </ButtonGroup>
  ),
  args: {
    ...Primary.args,
    variant: "border",
    isMerged: true,
  },
};
