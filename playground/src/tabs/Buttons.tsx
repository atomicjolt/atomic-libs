import React from "react";
import { Button, IconButton, IconMenu } from "../elements";
import { Item, Section } from "react-stately";

export default function Buttons() {
  return (
    <>
      <div className="padder">
        <Button onPress={() => console.log("hi")}>Primary</Button>
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
          <Item key="1">Test</Item>
          <Item key="2">Test</Item>
          <Item key="3">Test</Item>
          <Section title="Section">
            <Item key="4">Test</Item>
            <Item key="5">Test</Item>
            <Item key="6">Test</Item>
          </Section>
        </IconMenu>
      </div>
    </>
  );
}
