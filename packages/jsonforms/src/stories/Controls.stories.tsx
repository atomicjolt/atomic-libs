import type { Meta, StoryObj } from "@storybook/react";
import type { JsonSchema } from "@jsonforms/core";
import { control, JsonFormsDocsPage, JsonFormsStory, jsonFormsArgTypes } from "./JsonFormsStory";

const meta: Meta<typeof JsonFormsStory> = {
  title: "Controls",
  component: JsonFormsStory,
  argTypes: jsonFormsArgTypes,
  parameters: {
    docs: {
      page: JsonFormsDocsPage,
      description: {
        component:
          "Each control is picked from the field's JSON Schema type and format, and its " +
          "`uischema.options`. Edit `schema`, `uischema` and `data` in the Controls panel to " +
          "try other setups. Every option is in the " +
          "[Options reference](https://atomicjolt.github.io/atomic-libs/jsonforms/OptionsReference); guides are in the " +
          "[jsonforms docs](https://atomicjolt.github.io/atomic-libs/jsonforms/).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof JsonFormsStory>;

/** One-field form: `field` in the schema, one Control for it. */
const field = (schema: JsonSchema, options?: Record<string, unknown>, data?: unknown) => ({
  schema: { type: "object", properties: { field: schema } } as JsonSchema,
  uischema: control("field", options ? { options } : {}),
  ...(data !== undefined && { data: { field: data } }),
});

const describe = (text: string) => ({ docs: { description: { story: text } } });

export const Text: Story = {
  args: field({ type: "string", title: "Name", description: "As it appears on your ID" }),
  parameters: describe("`type: \"string\"` renders a TextField. The schema `description` shows under the input."),
};

export const TextArea: Story = {
  args: field({ type: "string", title: "Bio" }, { multi: true }),
  parameters: describe("`options.multi: true` renders a textarea."),
};

export const Number: Story = {
  args: field({ type: "number", title: "Price", minimum: 0 }),
  parameters: describe("`type: \"number\"` renders a NumberInput. `minimum` / `maximum` / `multipleOf` set its limits and step."),
};

export const Integer: Story = {
  args: field({ type: "integer", title: "Quantity", minimum: 1 }),
  parameters: describe("`type: \"integer\"` renders a NumberInput with no decimals."),
};

export const CheckBox: Story = {
  args: field({ type: "boolean", title: "I agree to the terms" }),
  parameters: describe("`type: \"boolean\"` renders a CheckBox."),
};

export const Toggle: Story = {
  args: field({ type: "boolean", title: "Email notifications" }, { toggle: true }),
  parameters: describe("`options.toggle: true` renders a ToggleSwitch."),
};

export const Select: Story = {
  args: field({ type: "string", title: "Color", enum: ["Red", "Green", "Blue"] }),
  parameters: describe("An `enum` renders a CustomSelect."),
};

export const SelectWithTitles: Story = {
  args: field(
    {
      title: "Plan",
      oneOf: [
        { const: null, title: "None" },
        { const: "basic", title: "Basic" },
        { const: "pro", title: "Professional" },
      ],
    },
    undefined,
    "pro",
  ),
  parameters: describe(
    "A `oneOf` of `const`s shows each option's `title` and stores its `const`. Any value works, including `null`.",
  ),
};

export const Radio: Story = {
  args: field({ type: "string", title: "Size", enum: ["Small", "Medium", "Large"] }, { format: "radio" }),
  parameters: describe("`options.format: \"radio\"` renders an `enum` or `oneOf` as a RadioGroup."),
};

export const ComboBox: Story = {
  args: field(
    { type: "string", title: "Country", enum: ["Canada", "Mexico", "United Kingdom", "United States"] },
    { autocomplete: true },
  ),
  parameters: describe("`options.autocomplete: true` renders an `enum` or `oneOf` as a filterable ComboBox."),
};

export const MultiSelect: Story = {
  args: field({
    type: "array",
    title: "Topics",
    uniqueItems: true,
    items: { type: "string", enum: ["News", "Sports", "Travel"] },
  }),
  parameters: describe(
    "An array with `uniqueItems: true` whose items are an `enum` (or `oneOf` of `const`s) renders a MultiSelect.",
  ),
};

export const Date: Story = {
  args: field({ type: "string", format: "date", title: "Due date" }, undefined, "2026-11-25"),
  parameters: describe("`format: \"date\"` renders a DatePicker and stores `YYYY-MM-DD`."),
};

export const Time: Story = {
  args: field({ type: "string", format: "time", title: "Start time" }, undefined, "09:30:00"),
  parameters: describe("`format: \"time\"` renders a TimeInput and stores `HH:mm:ss`."),
};

export const DateTime: Story = {
  args: field({ type: "string", format: "date-time", title: "Meeting" }, undefined, "2026-11-25T16:30:00.000Z"),
  parameters: describe(
    "`format: \"date-time\"` renders a DatePicker to the minute, in local time, and stores an ISO instant (UTC).",
  ),
};

export const ReadOnly: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        name: { type: "string", title: "Name" },
        role: { type: "string", title: "Role", enum: ["Teacher", "Student"] },
        active: { type: "boolean", title: "Active" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [control("name"), control("role"), control("active")],
    } as never,
    data: { name: "Ada Lovelace", role: "Teacher", active: true },
    readonly: true,
  },
  parameters: describe(
    "A read-only form (or a `DISABLE` rule) renders inputs read-only, so values stay readable and selectable.",
  ),
};

export const Invalid: Story = {
  args: {
    schema: {
      type: "object",
      required: ["email"],
      properties: {
        email: { type: "string", title: "Email", format: "email" },
        age: { type: "integer", title: "Age", minimum: 18 },
      },
    },
    uischema: { type: "VerticalLayout", elements: [control("email"), control("age")] } as never,
    data: { age: 12 },
  },
  parameters: describe("Validation errors show under each field, using the default error translator."),
};
