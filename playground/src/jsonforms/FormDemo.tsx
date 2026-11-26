import React, { useState } from "react";
import { JsonForms } from "@jsonforms/react";
import type { JsonSchema, UISchemaElement } from "@jsonforms/core";
import type { ErrorObject } from "ajv";
import { Button, Flex, Heading, Text, ToggleSwitch } from "@atomicjolt/atomic-elements";
import { devAtomicRenderers, atomicRenderers, fieldError, useJsonForm } from "@atomicjolt/jsonforms";

interface Profile {
  name?: string;
  email?: string;
  bio?: string;
  city?: string;
  region?: string;
}

// Module level: schema, uischema and renderers must be referentially stable.
const schema: JsonSchema = {
  type: "object",
  required: ["name", "email"],
  properties: {
    name: { type: "string", title: "Name", minLength: 2 },
    email: { type: "string", title: "Email", format: "email", description: "Work email" },
    bio: { type: "string", title: "Bio", maxLength: 200 },
    city: { type: "string", title: "City" },
    region: { type: "string", title: "Region" },
  },
};

const uischema = {
  type: "VerticalLayout",
  elements: [
    { type: "Label", text: "Edit your profile. Errors show after the first submit." },
    { type: "Control", scope: "#/properties/name" },
    { type: "Control", scope: "#/properties/email" },
    { type: "Control", scope: "#/properties/bio", options: { multi: true } },
    {
      type: "Group",
      label: "Location",
      elements: [
        {
          type: "HorizontalLayout",
          elements: [
            { type: "Control", scope: "#/properties/city" },
            { type: "Control", scope: "#/properties/region" },
          ],
        },
      ],
    },
  ],
} as UISchemaElement;

const initialData: Profile = { name: "Ada Lovelace" };
const renderers = [...atomicRenderers, ...devAtomicRenderers];

// Custom cross-field rule, passed to useJsonForm's `validate`.
const validate = (data: Profile) =>
  data.email?.endsWith("@example.com")
    ? [fieldError("email", "example.com addresses aren't allowed")]
    : [];

export function FormDemo() {
  const [readonly, setReadonly] = useState(false);
  const [serverErrors, setServerErrors] = useState<ErrorObject[]>();
  const [submitted, setSubmitted] = useState<Profile>();

  const form = useJsonForm<Profile>({
    schema,
    uischema,
    data: initialData,
    renderers,
    validate,
    serverErrors,
    readonly,
    onSubmit: setSubmitted,
  });

  return (
    <div className="pg-split">
      <section className="pg-panel">
        <Flex $direction="column" $gap="4">
          <Heading $size="5">Profile</Heading>
          <JsonForms {...form.props} />
          <Flex $gap="2" $wrap="wrap">
            <Button onPress={form.submit}>Submit</Button>
            <Button variant="secondary" onPress={form.reset}>
              Reset
            </Button>
            <Button
              variant="secondary"
              onPress={() => setServerErrors([fieldError("name", "That name is taken")])}
            >
              Simulate server error
            </Button>
          </Flex>
          <ToggleSwitch isSelected={readonly} onChange={setReadonly}>
            Read-only
          </ToggleSwitch>
        </Flex>
      </section>

      <section className="pg-panel">
        <Flex $direction="column" $gap="4">
          <Heading $size="5">Hook state</Heading>
          <Text>
            isValid: <strong>{String(form.isValid)}</strong> · isDirty:{" "}
            <strong>{String(form.isDirty)}</strong>
          </Text>
          <Heading $size="6">data</Heading>
          <pre className="pg-code">{JSON.stringify(form.data, null, 2)}</pre>
          <Heading $size="6">errors</Heading>
          <pre className="pg-code">
            {JSON.stringify(
              form.errors.map(({ instancePath, keyword, message }) => ({
                instancePath,
                keyword,
                message,
              })),
              null,
              2,
            )}
          </pre>
          <Heading $size="6">last submitted</Heading>
          <pre className="pg-code">
            {submitted ? JSON.stringify(submitted, null, 2) : "—"}
          </pre>
        </Flex>
      </section>
    </div>
  );
}
