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
          <IconMenu.Item onAction={() => alert("1")}>Test</IconMenu.Item>
          <IconMenu.Item key="2">Test</IconMenu.Item>
          <IconMenu.Item key="3">Test</IconMenu.Item>
          <Section title="Section">
            <IconMenu.Item key="4">Test</IconMenu.Item>
            <IconMenu.Item key="5">Test</IconMenu.Item>
            <IconMenu.Item key="6">Test</IconMenu.Item>
          </Section>
        </IconMenu>
      </div>
    </>
  );
}
