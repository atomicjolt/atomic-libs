import React from "react";
import { IconMenu, Item, Section } from "../elements";

export default function AriaComponents() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        <IconMenu onAction={console.log} icon="more_vert">
          <Item key="item1">Item 1</Item>
          <Item key="item2">Item 2</Item>
          <Section title="Section 1">
            <Item key="item3">Item 3</Item>
            <Item key="item4">Item 4 </Item>
          </Section>
        </IconMenu>
      </div>
    </div>
  );
}
