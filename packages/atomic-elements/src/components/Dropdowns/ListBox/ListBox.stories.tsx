import { StoryObj, Meta } from "@storybook/react-vite";
import {
  AriaLabelArgTypes,
  MultiSelectItemChildren,
  MultiSelectionArgTypes,
  RenderStylePropsArgTypes,
} from "@sb/helpers";
import { fn } from "storybook/test";
import { listbox } from "@styles/theme/component";
import { ListBox } from ".";
import { Section, Item } from "@components/Collection";

const meta: Meta<typeof ListBox> = {
  title: "Dropdowns/Selection/ListBox",
  component: ListBox,
  parameters: {
    cssprops: { listbox },
  },
  // ListBox's own props don't reach docgen (the forwardRef is cast to a
  // generic component type), so they are documented here.
  argTypes: {
    ...MultiSelectionArgTypes,
    ...AriaLabelArgTypes,
    ...RenderStylePropsArgTypes,
    size: {
      control: "select",
      options: ["small", "medium", "large", "auto", "full"],
      description: "The size of the listbox",
      table: { defaultValue: { summary: '"medium"' } },
    },
    label: {
      control: "text",
      description:
        "Visible label rendered above the listbox. Without one, set `aria-label`.",
    },
    children: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
  args: {
    "aria-label": "Categories",
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
