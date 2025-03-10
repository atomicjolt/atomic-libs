import { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";
import { Item, Section } from "@components/Collection";

export default {
  title: "Dropdowns/Menu/Menu",
  component: Menu,
  decorators: [
    (Story) => (
      <div
        style={{
          border: "var(--border)",
          borderRadius: "var(--radius)",
          padding: "1px",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClose: {
      description: "Callback for when the menu is closed.",
      table: {
        category: "Events",
      },
    },
    disabledKeys: {
      control: "multi-select",
      options: ["1", "2", "3"],
      description: "Keys of items that should be disabled.",
    },
    shouldFocusWrap: {
      control: "boolean",
      description:
        "Whether focus should wrap around the menu when using the keyboard.",
    },
  },
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  args: {
    children: [
      <Item key="1" onAction={() => alert("Item 1")}>
        Item 1
      </Item>,
      <Item key="2" onAction={() => alert("Item 2")}>
        Item 2
      </Item>,
      <Item key="3" onAction={() => alert("Item 3")}>
        Item 3
      </Item>,
    ],
  },
};

export const WithSections: Story = {
  ...Primary,
  args: {
    children: [
      <Section key="section1" title="Section 1">
        <Item key="1" onAction={() => alert("Item 1")}>
          First Item in Section 1
        </Item>
        <Item key="2" onAction={() => alert("Item 2")}>
          Second Item in Section 1
        </Item>
      </Section>,
      <Section key="section2" title="Section 2">
        <Item key="3" onAction={() => alert("Item 3")}>
          First Item in Section 2
        </Item>
        <Item key="4" onAction={() => alert("Item 4")}>
          Second Item in Section 2
        </Item>
      </Section>,
    ],
  },
};
