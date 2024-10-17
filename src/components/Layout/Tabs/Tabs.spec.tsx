import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Tabs } from ".";
import { Item } from "../../Collection";

test("matches snapshot", () => {
  const res = render(
    <Tabs selectedKey="tab1">
      <Tabs.List>
        <Item id="tab1">
          <h1>Tab One</h1>
        </Item>
        <Item id="tab2">
          <h1>Tab Two</h1>
        </Item>
        <Item id="tab3">
          <h1>Tab Three</h1>
        </Item>
      </Tabs.List>
      <Tabs.Panel id="tab1">
        <h1>Tab One Content</h1>
      </Tabs.Panel>
      <Tabs.Panel id="tab2">
        <h1>Tab Two Content</h1>
      </Tabs.Panel>
      <Tabs.Panel id="tab3">
        <h1>Tab Three Content</h1>
      </Tabs.Panel>
    </Tabs>
  );

  expect(res.asFragment()).toMatchSnapshot();
});
