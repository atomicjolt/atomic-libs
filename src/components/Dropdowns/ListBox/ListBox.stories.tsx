import { StoryObj, Meta } from "@storybook/react";
import { MultiSelectItemChildren, MultiSelectionArgTypes } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";
import { ListBox } from ".";
import { fn } from "@storybook/test";

const meta: Meta<typeof ListBox> = {
  title: "Dropdowns/Selection/ListBox",
  component: ListBox,
  parameters: {
    cssprops: getCssProps("Listbox"),
  },
  argTypes: {
    ...MultiSelectionArgTypes,
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
  args: {
    selectionMode: "single",
    defaultSelectedKeys: ["news"],
    selectionBehavior: "toggle",
    children: MultiSelectItemChildren,
    onSelectionChange: fn(),
  },
};

export const MultipleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "multiple",
    defaultSelectedKeys: ["news", "gaming"],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      ...MultiSelectItemChildren,
      <ListBox.Section title="Section Title">
        <ListBox.Item id={4}>Option 4</ListBox.Item>
        <ListBox.Item id={5}>Option 5</ListBox.Item>
      </ListBox.Section>,
    ],
  },
};
