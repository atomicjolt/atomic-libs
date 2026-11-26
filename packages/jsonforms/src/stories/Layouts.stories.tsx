import type { Meta, StoryObj } from "@storybook/react";
import type { JsonSchema, UISchemaElement } from "@jsonforms/core";
import { control, JsonFormsDocsPage, JsonFormsStory, jsonFormsArgTypes } from "./JsonFormsStory";

const schema: JsonSchema = {
  type: "object",
  properties: {
    first: { type: "string", title: "First name" },
    last: { type: "string", title: "Last name" },
    email: { type: "string", title: "Email" },
    street: { type: "string", title: "Street" },
    city: { type: "string", title: "City" },
  },
};

const meta: Meta<typeof JsonFormsStory> = {
  title: "Layouts",
  component: JsonFormsStory,
  argTypes: jsonFormsArgTypes,
  args: { schema, showData: false },
  parameters: {
    docs: {
      page: JsonFormsDocsPage,
      description: {
        component:
          "Layouts arrange other UI schema elements. The defaults are deliberately plain; apps " +
          "can register their own layout renderers at a higher rank " +
          "([Customizing](https://atomicjolt.github.io/atomic-libs/jsonforms/Customizing)).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof JsonFormsStory>;

const ui = (element: object) => element as UISchemaElement;
const describe = (text: string) => ({ docs: { description: { story: text } } });

export const Vertical: Story = {
  args: { uischema: ui({ type: "VerticalLayout", elements: [control("first"), control("last"), control("email")] }) },
  parameters: describe("`VerticalLayout` stacks its elements."),
};

export const Horizontal: Story = {
  args: { uischema: ui({ type: "HorizontalLayout", elements: [control("first"), control("last")] }) },
  parameters: describe("`HorizontalLayout` puts its elements side by side at equal widths."),
};

export const Group: Story = {
  args: { uischema: ui({ type: "Group", label: "Contact", elements: [control("first"), control("email")] }) },
  parameters: describe("`Group` shows its `label` as a heading: an `h2` at size `\"5\"` by default."),
};

export const GroupHeadingOptions: Story = {
  args: {
    uischema: ui({
      type: "Group",
      label: "Contact",
      options: { headingLevel: "h3", headingSize: "7" },
      elements: [control("first"), control("email")],
    }),
  },
  parameters: describe(
    "`options.headingLevel` (`\"h1\"`–`\"h6\"`) sets the heading element and `options.headingSize` (a scale step) its size.",
  ),
};

export const NestedGroups: Story = {
  args: {
    uischema: ui({
      type: "Group",
      label: "Profile",
      elements: [
        {
          type: "Group",
          label: "Name",
          options: { headingLevel: "h3", headingSize: "4" },
          elements: [{ type: "HorizontalLayout", elements: [control("first"), control("last")] }],
        },
        {
          type: "Group",
          label: "Address",
          options: { headingLevel: "h3", headingSize: "4" },
          elements: [control("street"), control("city")],
        },
      ],
    }),
  },
  parameters: describe("Step `headingLevel` and `headingSize` down for nested groups."),
};

export const Card: Story = {
  args: {
    uischema: ui({
      type: "Card",
      label: "Contact",
      elements: [{ type: "HorizontalLayout", elements: [control("first"), control("last")] }, control("email")],
    }),
  },
  parameters: describe(
    "`Card` renders an atomic-elements Card. Its `label` is a heading styled like `Card.Title`, with the same heading options as Group.",
  ),
};

export const CardPanels: Story = {
  args: {
    uischema: ui({
      type: "Card",
      label: "Profile",
      options: { panels: "columns" },
      elements: [
        {
          type: "VerticalLayout",
          elements: [{ type: "Label", text: "Name", options: { weight: "bold" } }, control("first"), control("last")],
        },
        {
          type: "VerticalLayout",
          elements: [{ type: "Label", text: "Address", options: { weight: "bold" } }, control("street"), control("city")],
        },
      ],
    }),
  },
  parameters: describe(
    "`options.panels`: `\"single\"` (default) puts every element in one panel; `\"stack\"` and `\"columns\"` give each element its own panel.",
  ),
};

export const Label: Story = {
  args: {
    uischema: ui({
      type: "VerticalLayout",
      elements: [{ type: "Label", text: "Tell us how to reach you. We never share your email." }, control("email")],
    }),
  },
  parameters: describe("`Label` renders plain text: a `div` at size `\"3\"`."),
};

export const LabelOptions: Story = {
  args: {
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        { type: "Label", text: "Create your account", options: { size: "6", weight: "bold", as: "p" } },
        control("email"),
        {
          type: "Label",
          text: "We'll only use your email to send receipts and important account notices.",
          options: { size: "2", color: "text-clr-secondary", wrap: "pretty", as: "p" },
        },
        {
          type: "Label",
          text: "All fields are optional",
          options: { align: "center", color: "text-clr-secondary", props: { $transform: "uppercase" } },
        },
      ],
    }),
  },
  parameters: describe(
    "`size`, `weight`, `color`, `align`, `wrap` and `as` style the text; `props` passes anything else to `Text`.",
  ),
};
