import React from "react";
import {
  Button,
  IconButton,
  IconMenu,
  Item,
  Section,
} from "@atomicjolt/atomic-elements";
import { Form } from "@atomicjolt/forms";
import { useBool } from "@atomicjolt/hooks";

export default function Buttons() {
  const [bool, toggleBool] = useBool(false);

  return (
    <>
      <div className="padder">
        <Button onPress={toggleBool}>{bool.toString()}</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="error">Error</Button>
        <Button variant="inverted">Inverted</Button>
      </div>
      <div className="padder">
        <IconButton icon="more_vert" aria-label="more" isLoading />
      </div>
      <div className="padder">
        <IconMenu>
          <Item onAction={() => alert("1")}>Test</Item>
          <Item key="2">Test</Item>
          <Item key="3">Test</Item>
          <Section title="Section">
            <Item key="4">Test</Item>
            <Item key="5">Test</Item>
            <Item key="6">Test</Item>
          </Section>
        </IconMenu>
      </div>
      <div>
        <Form onSubmit={console.log}>
          <Form.TextInput name="name" label="Text input" />
          <Form.SubmitButton>Submit</Form.SubmitButton>
        </Form>
      </div>
    </>
  );
}
