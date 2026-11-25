import { Meta, StoryObj } from "@storybook/react-vite";
import { AriaLabelArgTypes } from "@sb/helpers";
import { button, dropdown, menu } from "@styles/theme/component";
import { IconMenu } from ".";
import { Item, MaterialIcon, Section } from "../../";

const meta: Meta<typeof IconMenu> = {
  title: "Dropdowns/Menu/IconMenu",
  component: IconMenu,
  parameters: {
    layout: "centered",
    cssprops: { dropdown, menu, button },
  },
  argTypes: {
    buttonVariant: {
      control: "select",
      options: [
        "border",
        "ghost",
        "primary",
        "secondary",
        "link",
        "error",
        "success",
        "inverted",
        "content",
      ],
      description: "Variant of the trigger button.",
      table: { defaultValue: { summary: '"border"' } },
    },
    icon: {
      table: { defaultValue: { summary: '"more_vert"' } },
    },
    size: {
      table: { defaultValue: { summary: '"medium"' } },
    },
    iconVariant: {
      control: "select",
      options: ["default", "outlined", "round", "sharp", "two-tone"],
    },
    children: {
      control: false,
    },
    "aria-label": {
      ...AriaLabelArgTypes["aria-label"],
      description:
        "Accessible label for the icon-only trigger button and the menu.",
    },
    onAction: {
      action: "onAction",
      description: "Called with the key of the item the user selects.",
      table: {
        category: "Events",
      },
    },
    onClose: {
      description: "Callback for when the menu is closed.",
      table: {
        category: "Events",
      },
    },
    onOpenChange: {
      description: "Callback for when the menu is opened or closed.",
      table: {
        category: "Events",
      },
    },
    isOpen: {
      control: "boolean",
      description: "Control the open state of the menu externally.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the menu is open by default.",
    },
    disabledKeys: {
      control: "multi-select",
      options: ["item1", "item2", "item3"],
      description: "Keys of items that should be disabled.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconMenu>;

export const Primary: Story = {
  args: {
    "aria-label": "More options",
    children: [
      <Item id="item1" key="item1" onAction={() => alert("Item 1")}>
        Item 1
      </Item>,
      <Item id="item2" key="item2" onAction={() => alert("Item 2")}>
        Item 2
      </Item>,
      <Item id="item3" key="item3" onAction={() => alert("Item 3")}>
        Item 3
      </Item>,
    ],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item key="item1">Item 1</Item>,
      <Item key="item2">Item 2</Item>,
      <Section key="section">
        <Item key="item3">Item 3</Item>
        <Item key="item4">Item 4</Item>
      </Section>,
    ],
  },
};

export const WithIcons: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item key="item1">
        <MaterialIcon icon="edit" />
        Edit
      </Item>,
      <Item key="item2">
        <MaterialIcon icon="delete" />
        Delete
      </Item>,
      <Item key="item3">
        <MaterialIcon icon="archive" />
        Archive
      </Item>,
    ],
  },
};

export const DisabledItems: Story = {
  args: {
    ...Primary.args,
    disabledKeys: ["item2"],
  },
};
