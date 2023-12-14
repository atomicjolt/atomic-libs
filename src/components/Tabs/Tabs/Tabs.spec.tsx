import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Tab from "./Tab";
import TabsNavigation, { TabLink } from "./TabNavigation";
import Tabs, { TabsContent } from "./Tabs";

test("matches snapshot", () => {
  const res = render(
    <Tabs currentTab="tab1" onChange={() => {}}>
      <TabsNavigation key="nav">
        <TabLink to="tab1">Tab One</TabLink>
        <TabLink to="tab2">Tab Two</TabLink>
      </TabsNavigation>
      <TabsContent key="content">
        <Tab name="tab1">
          <div>
            <h2>First Tab</h2>
          </div>
        </Tab>
        <Tab name="tab2">
          <div>
            <h2>Second Tab</h2>
          </div>
        </Tab>
      </TabsContent>
    </Tabs>
  );

  expect(res.asFragment()).toMatchSnapshot();
});
