import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import  {Tabs  } from ".";
import { Item } from '../../Atoms/Collection';

test("matches snapshot", () => {
  const res = render(
    <Tabs selectedKey="tab1">
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
  );

  expect(res.asFragment()).toMatchSnapshot();
});
