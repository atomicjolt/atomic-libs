import { Button, Divider, Flex } from "@atomicjolt/atomic-elements";
import { Form } from "@atomicjolt/forms";
import { useBool } from "@atomicjolt/hooks";
import React from "react";

export function Home() {
  const [bool, toggle] = useBool(false);

  return (
    <Flex>
      <Button onPress={toggle}>bool: {bool.toString()}</Button>
      <Divider orientation="vertical" />

      <Form onSubmit={console.log}>
        <Form.TextInput name="name" label="Text input" />
        <br />
        <Form.SubmitButton>Submit</Form.SubmitButton>
      </Form>
    </Flex>
  );
}
