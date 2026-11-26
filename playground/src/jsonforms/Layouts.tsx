import React from "react";
import type { JsonSchema } from "@jsonforms/core";
import { Demo, DemoPage } from "../components/Demo";
import { Example } from "./Example";

const schema: JsonSchema = {
  type: "object",
  properties: {
    first: { type: "string", title: "First name" },
    last: { type: "string", title: "Last name" },
    email: { type: "string", title: "Email" },
    street: { type: "string", title: "Street" },
    city: { type: "string", title: "City" },
    newsletter: { type: "boolean", title: "Subscribe to the newsletter" },
    frequency: { type: "string", title: "Frequency", enum: ["Daily", "Weekly", "Monthly"] },
  },
};

const control = (property: string, options?: object) => ({
  type: "Control",
  scope: `#/properties/${property}`,
  ...(options && { options }),
});

const examples: { title: string; description: React.ReactNode; uischema: object }[] = [
  {
    title: "Vertical and horizontal layouts",
    description: "Elements stack in a VerticalLayout and share a row in a HorizontalLayout.",
    uischema: {
      type: "VerticalLayout",
      elements: [
        { type: "HorizontalLayout", elements: [control("first"), control("last")] },
        control("email"),
      ],
    },
  },
  {
    title: "Group",
    description: (
      <>
        The label renders as a heading: <code>h2</code> at size <code>5</code> by default.
      </>
    ),
    uischema: {
      type: "Group",
      label: "Contact",
      elements: [control("first"), control("email")],
    },
  },
  {
    title: "Group with heading options",
    description: (
      <>
        <code>options.headingLevel</code> sets the element (<code>h1</code>–<code>h6</code>) and{" "}
        <code>options.headingSize</code> sets the size (a scale step).
      </>
    ),
    uischema: {
      type: "Group",
      label: "Contact",
      options: { headingLevel: "h3", headingSize: "7" },
      elements: [control("first"), control("email")],
    },
  },
  {
    title: "Nested groups",
    description: "Step the heading level and size down for each level of nesting.",
    uischema: {
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
    },
  },
  {
    title: "Card",
    description: (
      <>
        A <code>Card</code> element renders an atomic-elements Card. The label becomes the card
        title (an <code>h2</code> by default; <code>headingLevel</code> and{" "}
        <code>headingSize</code> work as on Group).
      </>
    ),
    uischema: {
      type: "Card",
      label: "Contact",
      elements: [
        { type: "HorizontalLayout", elements: [control("first"), control("last")] },
        control("email"),
      ],
    },
  },
  {
    title: "Card panels",
    description: (
      <>
        <code>options.panels</code> gives each element its own panel: <code>"stack"</code> stacks
        them, <code>"columns"</code> puts them side by side. Nest layouts to group fields within a
        panel.
      </>
    ),
    uischema: {
      type: "Card",
      label: "Profile",
      options: { panels: "columns" },
      elements: [
        {
          type: "VerticalLayout",
          elements: [
            { type: "Label", text: "Name", options: { weight: "bold" } },
            control("first"),
            control("last"),
          ],
        },
        {
          type: "VerticalLayout",
          elements: [
            { type: "Label", text: "Address", options: { weight: "bold" } },
            control("street"),
            control("city"),
          ],
        },
      ],
    },
  },
  {
    title: "Label",
    description: "A Label element renders plain text, for intros or help between controls.",
    uischema: {
      type: "VerticalLayout",
      elements: [
        { type: "Label", text: "Tell us how to reach you. We never share your email." },
        control("email"),
      ],
    },
  },
  {
    title: "Label options",
    description: (
      <>
        <code>size</code>, <code>weight</code>, <code>color</code>, <code>align</code>,{" "}
        <code>wrap</code> and <code>as</code> style the text; <code>props</code> passes anything
        else to <code>Text</code>.
      </>
    ),
    uischema: {
      type: "VerticalLayout",
      elements: [
        {
          type: "Label",
          text: "Create your account",
          options: { size: "6", weight: "bold", as: "p" },
        },
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
    },
  },
  {
    title: "Label with a rule",
    description: "Like other elements, a Label can be shown or hidden by a rule.",
    uischema: {
      type: "VerticalLayout",
      elements: [
        control("newsletter"),
        {
          type: "Label",
          text: "Great! Choose how often you'd like to hear from us.",
          rule: {
            effect: "SHOW",
            condition: { scope: "#/properties/newsletter", schema: { const: true } },
          },
        },
        {
          ...control("frequency", { format: "radio" }),
          rule: {
            effect: "SHOW",
            condition: { scope: "#/properties/newsletter", schema: { const: true } },
          },
        },
      ],
    },
  },
];

export function Layouts() {
  return (
    <DemoPage>
      {examples.map(({ title, description, uischema }) => (
        <Demo key={title} title={title} description={description}>
          <Example schema={schema} uischema={uischema} />
        </Demo>
      ))}
    </DemoPage>
  );
}
