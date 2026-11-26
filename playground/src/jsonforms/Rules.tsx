import React from "react";
import type { JsonSchema } from "@jsonforms/core";
import { Demo, DemoPage } from "../components/Demo";
import { Example, ExampleProps } from "./Example";

const control = (property: string, extra: object = {}) => ({
  type: "Control",
  scope: `#/properties/${property}`,
  ...extra,
});

/** A rule whose condition is "the field at `property` matches `schema`". */
const when = (effect: string, property: string, schema: JsonSchema, extra: object = {}) => ({
  rule: {
    effect,
    condition: { scope: `#/properties/${property}`, schema, ...extra },
  },
});

interface RuleExample extends Omit<ExampleProps, "showState"> {
  title: string;
  description: React.ReactNode;
}

const examples: RuleExample[] = [
  {
    title: "Show when a checkbox is checked",
    description: (
      <>
        <code>SHOW</code> with a <code>const</code> condition. The element is hidden until the
        condition matches.
      </>
    ),
    schema: {
      type: "object",
      properties: {
        hasPet: { type: "boolean", title: "I have a pet" },
        petName: { type: "string", title: "Pet's name" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [control("hasPet"), control("petName", when("SHOW", "hasPet", { const: true }))],
    },
  },
  {
    title: "Switch fields on a choice",
    description: (
      <>
        Each field has its own <code>SHOW</code> rule on the same radio group, so only the one for
        the chosen method appears.
      </>
    ),
    schema: {
      type: "object",
      properties: {
        method: { type: "string", title: "Contact me by", enum: ["Email", "Phone", "Mail"] },
        email: { type: "string", title: "Email" },
        phone: { type: "string", title: "Phone" },
        address: { type: "string", title: "Mailing address" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("method", { options: { format: "radio" } }),
        control("email", when("SHOW", "method", { const: "Email" })),
        control("phone", when("SHOW", "method", { const: "Phone" })),
        control("address", { options: { multi: true }, ...when("SHOW", "method", { const: "Mail" }) }),
      ],
    },
  },
  {
    title: "Enable a field",
    description: (
      <>
        <code>ENABLE</code> / <code>DISABLE</code> keep the field visible. The atomic renderers show
        a disabled field as read-only, so its value stays readable and selectable.
      </>
    ),
    schema: {
      type: "object",
      properties: {
        customDomain: { type: "boolean", title: "Use a custom domain" },
        domain: { type: "string", title: "Domain" },
      },
    },
    data: { domain: "example.atomicjolt.com" },
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("customDomain", { options: { toggle: true } }),
        control("domain", when("ENABLE", "customDomain", { const: true })),
      ],
    },
  },
  {
    title: "Number thresholds",
    description: (
      <>
        Any JSON Schema keyword works as a condition. Here <code>minimum</code> shows an approval
        section for amounts of 1,000 or more.
      </>
    ),
    schema: {
      type: "object",
      properties: {
        amount: { type: "number", title: "Amount" },
        approver: { type: "string", title: "Approver" },
        justification: { type: "string", title: "Justification" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("amount"),
        {
          type: "Group",
          label: "Manager approval",
          options: { headingLevel: "h3", headingSize: "4" },
          ...when("SHOW", "amount", { minimum: 1000 }),
          elements: [
            {
              type: "Label",
              text: "Amounts of 1,000 or more need a manager's approval.",
              options: { color: "text-clr-secondary" },
            },
            control("approver"),
            control("justification", { options: { multi: true } }),
          ],
        },
      ],
    },
  },
  {
    title: "Hide until answered (failWhenUndefined)",
    description: (
      <>
        A <code>not</code> condition matches an empty field, because nothing is "not" anything. With{" "}
        <code>failWhenUndefined: true</code> the condition fails while the field is empty, so the
        follow-up stays hidden until a real answer is picked.
      </>
    ),
    schema: {
      type: "object",
      properties: {
        allergy: {
          type: "string",
          title: "Allergies",
          enum: ["None", "Peanuts", "Dairy", "Gluten", "Other"],
        },
        severity: {
          type: "string",
          title: "Severity",
          enum: ["Mild", "Moderate", "Severe"],
        },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("allergy"),
        control("severity", {
          options: { format: "radio" },
          ...when("SHOW", "allergy", { not: { const: "None" } }, { failWhenUndefined: true }),
        }),
      ],
    },
  },
  {
    title: "Combine conditions (AND / OR)",
    description: (
      <>
        <code>AND</code> and <code>OR</code> conditions hold a list of conditions. The shipping
        address shows for physical orders that aren't picked up in store. The pickup checkbox
        only appears for physical products.
      </>
    ),
    schema: {
      type: "object",
      properties: {
        product: { type: "string", title: "Product", enum: ["E-book", "Paperback", "Hardcover"] },
        pickup: { type: "boolean", title: "Pick up in store" },
        address: { type: "string", title: "Shipping address" },
      },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("product"),
        control(
          "pickup",
          when("SHOW", "product", { enum: ["Paperback", "Hardcover"] }, { failWhenUndefined: true }),
        ),
        control("address", {
          options: { multi: true },
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
    },
  },
  {
    title: "Rules on arrays",
    description: (
      <>
        Array keywords work too: <code>contains</code> shows a field when a particular option is
        selected in a multi-select. <code>failWhenUndefined</code> matters here: an empty field
        passes <code>contains</code>, because the keyword only checks arrays.
      </>
    ),
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
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("topics"),
        control(
          "otherTopic",
          when("SHOW", "topics", { contains: { const: "Other" } }, { failWhenUndefined: true }),
        ),
      ],
    },
  },
  {
    title: "Custom condition (validate function)",
    description: (
      <>
        A condition can be a JavaScript function instead of a schema. It isn't JSON, so it only
        works in UI schemas built in code, and doesn't appear in the JSON on the right. Here it
        shows a note when the email isn't on a school domain.
      </>
    ),
    schema: {
      type: "object",
      properties: { email: { type: "string", title: "Email" } },
    },
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("email"),
        {
          type: "Label",
          text: "Use your school email (ending in .edu) so we can verify your account.",
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
    },
  },
  {
    title: "Rules and validation",
    description: (
      <>
        Rules only change the UI; validation still sees every field. If a hidden field is{" "}
        <code>required</code> at the top level, the form can never be valid while it's hidden. Make
        the requirement conditional in the schema with <code>if</code> / <code>then</code>, so it
        matches the rule.
      </>
    ),
    schema: {
      type: "object",
      properties: {
        employed: { type: "boolean", title: "Currently employed" },
        employer: { type: "string", title: "Employer" },
      },
      if: { properties: { employed: { const: true } }, required: ["employed"] },
      then: { required: ["employer"] },
    },
    validationMode: "ValidateAndShow",
    showSchema: true,
    uischema: {
      type: "VerticalLayout",
      elements: [control("employed"), control("employer", when("SHOW", "employed", { const: true }))],
    },
  },
];

export function Rules() {
  return (
    <DemoPage>
      {examples.map(({ title, description, ...example }) => (
        <Demo key={title} title={title} description={description}>
          <Example {...example} showState />
        </Demo>
      ))}
    </DemoPage>
  );
}
