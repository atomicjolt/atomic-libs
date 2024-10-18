import { StoryObj, Meta } from "@storybook/react";
import { MultiSelectItemChildren, MultiSelectionArgTypes } from "@sb/helpers";
import { fn } from "@storybook/test";
import { getCssProps } from "@sb/cssprops";
import { ListBox } from ".";
import { Section, Item } from "@components/Collection";

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
      <Section title="Section Title">
        <Item id={4}>Option 4</Item>
        <Item id={5}>Option 5</Item>
      </Section>,
    ],
  },
};
