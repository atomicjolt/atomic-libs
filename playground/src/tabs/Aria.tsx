import React from "react";
import { CustomSelect, IconMenu, Item, Section } from "../elements";

export default function Aria() {
  return (
    <div>
      <IconMenu menuPlacement="bottom end" aria-label="Label">
        <IconMenu.Item onAction={() => console.log("item 1 action")}>
          Item 1
        </IconMenu.Item>
        <IconMenu.Item onAction={() => console.log("item 2 action")}>
          Item 2
        </IconMenu.Item>
        <Section>
          <IconMenu.Item onAction={() => console.log("item 3 action")}>
            Item 3
          </IconMenu.Item>
        </Section>
      </IconMenu>

      <CustomSelect label="Label">
        <Item key="1">Item 1</Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </CustomSelect>
    </div>
  );
}
