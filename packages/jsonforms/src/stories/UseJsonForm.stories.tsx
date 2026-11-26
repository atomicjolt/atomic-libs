import React, { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import type { JsonSchema, UISchemaElement } from "@jsonforms/core";
import type { ErrorObject } from "ajv";
import { JsonForms } from "@jsonforms/react";
import { Button, Flex, Text } from "@atomicjolt/atomic-elements";
import { useJsonForm } from "../hooks/useJsonForm";
import { fieldError } from "../validation/fieldError";
import { atomicRenderers, devAtomicRenderers } from "../registry";
import { control } from "./JsonFormsStory";

interface Profile {
  name?: string;
  email?: string;
}

const schema: JsonSchema = {
  type: "object",
  required: ["name", "email"],
  properties: {
    name: { type: "string", title: "Name", minLength: 2 },
    email: { type: "string", title: "Email", format: "email" },
  },
};

const uischema = {
  type: "VerticalLayout",
  elements: [control("name"), control("email")],
} as UISchemaElement;

const renderers = [...atomicRenderers, ...devAtomicRenderers];

const validate = (data: Profile) =>
  data.email?.endsWith("@example.com") ? [fieldError("email", "example.com addresses aren't allowed")] : [];

/** A profile form driven by `useJsonForm`, with its state shown underneath. */
function UseJsonFormDemo() {
  const [submitted, setSubmitted] = useState<Profile>();
  const [serverErrors, setServerErrors] = useState<ErrorObject[]>();
  const initialData = useMemo<Profile>(() => ({ name: "Ada Lovelace" }), []);

  const form = useJsonForm<Profile>({
    schema,
    uischema,
    data: initialData,
    renderers,
    validate,
    serverErrors,
    onSubmit: setSubmitted,
  });

  return (
    <Flex $direction="column" $gap="4" style={{ maxWidth: "60rem" }}>
      <JsonForms {...form.props} />
      <Flex $gap="2" $wrap="wrap">
        <Button onPress={form.submit}>Submit</Button>
        <Button variant="secondary" onPress={form.reset}>
          Reset
        </Button>
        <Button variant="secondary" onPress={() => setServerErrors([fieldError("name", "That name is taken")])}>
          Simulate server error
        </Button>
      </Flex>
      <Text $size="2">
        isValid: <strong>{String(form.isValid)}</strong> · isDirty: <strong>{String(form.isDirty)}</strong> ·
        submitted: <strong>{submitted ? JSON.stringify(submitted) : "—"}</strong>
      </Text>
    </Flex>
  );
}

const meta: Meta<typeof UseJsonFormDemo> = {
  title: "useJsonForm",
  component: UseJsonFormDemo,
  parameters: {
    docs: {
      description: {
        component:
          "A profile form driven by `useJsonForm`. Submit with the email empty, enter an " +
          "`@example.com` address (a custom rule), or simulate a server error and then edit the " +
          "name. The full API is in the [useJsonForm docs](https://atomicjolt.github.io/atomic-libs/jsonforms/UseJsonForm).",
      },
    },
  },
};

export default meta;

export const Example: StoryObj<typeof UseJsonFormDemo> = {};
