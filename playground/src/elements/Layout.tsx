import React from "react";
import {
  Card,
  Disclosure,
  DisclosureGroup,
  Divider,
  Flex,
  Pagination,
  Tabs,
  Text,
} from "@atomicjolt/atomic-elements";
import { Demo, DemoGrid, DemoPage } from "../components/Demo";

const TAB_VARIANTS = ["default", "card", "toggle"] as const;

export default function Layout() {
  return (
    <DemoPage>
      <Demo title="Tabs">
        {TAB_VARIANTS.map((variant) => (
          <Tabs key={variant} variant={variant}>
            <Tabs.List>
              <Tabs.Tab id="one">{variant}: One</Tabs.Tab>
              <Tabs.Tab id="two">Two</Tabs.Tab>
              <Tabs.Tab id="three">Three</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel id="one"><Text>First panel</Text></Tabs.Panel>
            <Tabs.Panel id="two"><Text>Second panel</Text></Tabs.Panel>
            <Tabs.Panel id="three"><Text>Third panel</Text></Tabs.Panel>
          </Tabs>
        ))}
      </Demo>

      <DemoGrid>
        <Demo title="Card">
          <Card>
            <Card.Header>
              <Card.Title>Card title</Card.Title>
            </Card.Header>
            <Card.Panel>
              <Text $size="3">Content in a panel.</Text>
            </Card.Panel>
          </Card>
        </Demo>

        <Demo title="Card with columns">
          <Card>
            <Card.Header>
              <Card.Title>Card title</Card.Title>
            </Card.Header>
            <Card.Columns>
              <Card.Panel><Text $size="3">Column 1</Text></Card.Panel>
              <Card.Panel><Text $size="3">Column 2</Text></Card.Panel>
            </Card.Columns>
          </Card>
        </Demo>
      </DemoGrid>

      <Demo title="Disclosure">
        <DisclosureGroup allowsMultipleExpanded>
          <Flex $direction="column" $gap="2" className="pg-stretch">
            <Disclosure id="one">
              <Disclosure.Trigger>First section</Disclosure.Trigger>
              <Disclosure.Panel><Text>First section content.</Text></Disclosure.Panel>
            </Disclosure>
            <Disclosure id="two">
              <Disclosure.Trigger>Second section</Disclosure.Trigger>
              <Disclosure.Panel><Text>Second section content.</Text></Disclosure.Panel>
            </Disclosure>
          </Flex>
        </DisclosureGroup>
      </Demo>

      <Demo title="Divider">
        <Text $size="3">Above</Text>
        <div className="pg-stretch">
          <Divider />
        </div>
        <Text $size="3">Below</Text>
      </Demo>

      <Demo title="Pagination">
        <Pagination defaultPage={2} totalPages={10}>
          <Flex $align="center" $gap="1">
            <Pagination.FirstPage />
            <Pagination.PrevPage />
            <Pagination.CurrentPage />
            <Pagination.NextPage />
            <Pagination.LastPage />
          </Flex>
        </Pagination>
      </Demo>
    </DemoPage>
  );
}
