import React from "react";
import { CustomSelect, IconMenu, Item, Section, Tabs, TextArea } from "../elements";

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

      <TextArea label="Label" isReadOnly />

      <Tabs variant='card'>
        <Item key="tab1" title="Tab 1">
          <Tabs variant="toggle" info={<span>Licensed Users: <strong>1000/1000</strong></span>}>
            <Item key="tab1" title="Tab 1">
              <h1>Tab One</h1>
            </Item>
            <Item key="tab2" title="Tab 2">
              <h1>Tab Two</h1>
            </Item>
            <Item key="tab3" title="Tab 3">
              <h1>Tab Three</h1>
            </Item>
          </Tabs>

        </Item>
        <Item key="tab2" title="Tab 2">
          <h1>Tab Two</h1>
        </Item>
        <Item key="tab3" title="Tab 3">
          <h1>Tab Three</h1>
        </Item>
      </Tabs>
    </div>
  );
}
