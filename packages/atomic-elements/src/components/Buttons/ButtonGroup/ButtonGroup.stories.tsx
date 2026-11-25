import { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from ".";
import { Button } from "../Button";
import { IconButton } from "../IconButton";
import { Item } from "../../Collection";
import { IconMenu } from "../../Dropdowns/IconMenu";
import {
  FlexArgTypes,
  FlexItemArgTypes,
  LayoutArgTypes,
  LoadingArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";

const meta: Meta<typeof ButtonGroup> = {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    ...FlexArgTypes,
    ...LoadingArgTypes,
    $direction: {
      ...FlexArgTypes.$direction,
      table: {
        ...FlexArgTypes.$direction?.table,
        defaultValue: { summary: '"row"' },
      },
    },
    isDisabled: {
      control: "boolean",
      description:
        "Disables all of the buttons in the group. Can be overridden by the individual buttons.",
      table: {
        category: "State",
      },
    },
    variant: {
      control: "select",
      description:
        "Sets the variant for all of the buttons in the group. Can be overridden by the individual buttons.",
      options: [
        "primary",
        "secondary",
        "link",
        "error",
        "success",
        "inverted",
        "content",
        "border",
        "ghost",
      ],
    },
    isMerged: {
      control: "boolean",
      description:
        "Visually joins the buttons into one control: removes the gap between them and the borders and corner radii where they meet.",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "full", "auto"],
      description:
        "Sets the size for all of the buttons in the group. Can be overridden by the individual buttons.",
    },
    isLoading: {
      control: "boolean",
      description:
        "Puts all of the buttons in the group in their loading state. Can be overridden by the individual buttons.",
      table: {
        category: "State",
      },
    },
    icon: {
      control: "text",
      description:
        "Material icon passed down to each IconButton in the group. Can be overridden by the individual buttons.",
    },
    iconVariant: {
      control: "select",
      options: ["default", "outlined", "round", "sharp", "two-tone"],
      description:
        "Material icon set passed down to each IconButton in the group. Can be overridden by the individual buttons.",
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
    $gap: "5",
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
