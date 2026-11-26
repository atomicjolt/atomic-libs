import type { Meta, StoryObj } from "@storybook/react";
import type { UISchemaElement } from "@jsonforms/core";
import { control, JsonFormsDocsPage, JsonFormsStory, jsonFormsArgTypes, when } from "./JsonFormsStory";

const meta: Meta<typeof JsonFormsStory> = {
  title: "Rules",
  component: JsonFormsStory,
  argTypes: jsonFormsArgTypes,
  args: { validationMode: "NoValidation" },
  parameters: {
    docs: {
      page: JsonFormsDocsPage,
      description: {
        component:
          "A `rule` on any UI schema element shows, hides, enables or disables it based on the " +
          "form data. The condition is a JSON Schema checked against the value at `scope`. " +
          "Watch for empty fields: they pass most schemas, so use `failWhenUndefined: true` " +
          "when an empty field shouldn't match. Rules don't affect validation; see " +
          "[Validation](https://atomicjolt.github.io/atomic-libs/jsonforms/Validation).",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof JsonFormsStory>;

const ui = (element: object) => element as UISchemaElement;
const describe = (text: string) => ({ docs: { description: { story: text } } });

export const ShowWhenChecked: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        hasPet: { type: "boolean", title: "I have a pet" },
        petName: { type: "string", title: "Pet's name" },
      },
    },
    uischema: ui({
      type: "VerticalLayout",
      elements: [control("hasPet"), control("petName", when("SHOW", "hasPet", { const: true }))],
    }),
  },
  parameters: describe("`SHOW` with a `const` condition: hidden until the box is checked."),
};

export const SwitchOnChoice: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        method: { type: "string", title: "Contact me by", enum: ["Email", "Phone"] },
        email: { type: "string", title: "Email" },
        phone: { type: "string", title: "Phone" },
      },
    },
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        control("method", { options: { format: "radio" } }),
        control("email", when("SHOW", "method", { const: "Email" })),
        control("phone", when("SHOW", "method", { const: "Phone" })),
      ],
    }),
  },
  parameters: describe("One `SHOW` rule per field on the same choice."),
};

export const EnableField: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        customDomain: { type: "boolean", title: "Use a custom domain" },
        domain: { type: "string", title: "Domain" },
      },
    },
    data: { domain: "example.atomicjolt.com" },
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        control("customDomain", { options: { toggle: true } }),
        control("domain", when("ENABLE", "customDomain", { const: true })),
      ],
    }),
  },
  parameters: describe("`ENABLE` / `DISABLE` keep the field visible; disabled fields render read-only."),
};

export const RuleOnALayout: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        amount: { type: "number", title: "Amount" },
        approver: { type: "string", title: "Approver" },
      },
    },
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        control("amount"),
        {
          type: "Group",
          label: "Manager approval",
          options: { headingLevel: "h3", headingSize: "4" },
          ...when("SHOW", "amount", { minimum: 1000 }),
          elements: [control("approver")],
        },
      ],
    }),
  },
  parameters: describe("Rules work on layouts too. Any schema keyword can be a condition, here `minimum`."),
};

export const FailWhenUndefined: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        allergy: { type: "string", title: "Allergies", enum: ["None", "Peanuts", "Dairy", "Other"] },
        severity: { type: "string", title: "Severity", enum: ["Mild", "Moderate", "Severe"] },
      },
    },
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        control("allergy"),
        control("severity", {
          options: { format: "radio" },
          ...when("SHOW", "allergy", { not: { const: "None" } }, { failWhenUndefined: true }),
        }),
      ],
    }),
  },
  parameters: describe(
    "An empty field matches `not`. `failWhenUndefined: true` keeps the follow-up hidden until a real answer is picked.",
  ),
};

export const AndOr: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        product: { type: "string", title: "Product", enum: ["E-book", "Paperback", "Hardcover"] },
        pickup: { type: "boolean", title: "Pick up in store" },
        address: { type: "string", title: "Shipping address" },
      },
    },
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        control("product"),
        control("pickup", when("SHOW", "product", { enum: ["Paperback", "Hardcover"] }, { failWhenUndefined: true })),
        control("address", {
          rule: {
            effect: "SHOW",
            condition: {
              type: "AND",
              conditions: [
                {
                  type: "OR",
                  conditions: [
                    { scope: "#/properties/product", schema: { const: "Paperback" } },
                    { scope: "#/properties/product", schema: { const: "Hardcover" } },
                  ],
                },
                { scope: "#/properties/pickup", schema: { not: { const: true } } },
              ],
            },
          },
        }),
      ],
    }),
  },
  parameters: describe("`AND` / `OR` conditions combine others: physical orders not picked up in store need an address."),
};

export const ArrayContains: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        topics: {
          type: "array",
          title: "Topics",
          uniqueItems: true,
          items: { type: "string", enum: ["News", "Sports", "Other"] },
        },
        otherTopic: { type: "string", title: "Other topic" },
      },
    },
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        control("topics"),
        control("otherTopic", when("SHOW", "topics", { contains: { const: "Other" } }, { failWhenUndefined: true })),
      ],
    }),
  },
  parameters: describe("`contains` checks a multi-select. Without `failWhenUndefined`, an empty field would match."),
};

export const ValidateFunction: Story = {
  args: {
    schema: { type: "object", properties: { email: { type: "string", title: "Email" } } },
    uischema: ui({
      type: "VerticalLayout",
      elements: [
        control("email"),
        {
          type: "Label",
          text: "Use your school email (ending in .edu).",
          options: { color: "text-clr-secondary" },
          rule: {
            effect: "SHOW",
            condition: {
              scope: "#/properties/email",
              validate: ({ data }: { data: unknown }) =>
                typeof data === "string" && data.includes("@") && !data.endsWith(".edu"),
            },
          },
        },
      ],
    }),
  },
  // A function can't round-trip through the JSON editor.
  argTypes: { uischema: { control: false } },
  parameters: describe(
    "A condition can be a function (`validate`) instead of a schema. It only works in UI schemas built in code.",
  ),
};

export const RulesAndValidation: Story = {
  args: {
    schema: {
      type: "object",
      properties: {
        employed: { type: "boolean", title: "Currently employed" },
        employer: { type: "string", title: "Employer" },
      },
      if: { properties: { employed: { const: true } }, required: ["employed"] },
      then: { required: ["employer"] },
    },
    uischema: ui({
      type: "VerticalLayout",
      elements: [control("employed"), control("employer", when("SHOW", "employed", { const: true }))],
    }),
    validationMode: "ValidateAndShow",
  },
  parameters: describe(
    "Rules don't affect validation: a hidden, top-level `required` field still blocks the form. Use `if` / `then` so the requirement matches the rule.",
  ),
};
