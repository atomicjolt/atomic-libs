import React from "react";
import { Card, Divider, Flex } from "../elements";

function CustomComponent({ className, children }) {
  return (
    <div className={className}>
      hi there
      {children}
    </div>
  );
}

export default function Aria() {
  return (
    <div style={{ height: "40px" }}>
      <Flex>
        <p>Here is some content</p>
        <Divider orientation="vertical" />
        <p>Here is some below content</p>
      </Flex>

      <p>Here is some content</p>
      <Divider />
      <p>Here is some below content</p>

      <Card>
        <Card.Columns>
          <Card.Panel>
            <p>Above</p>
          </Card.Panel>
          <Divider orientation="vertical" />
          <Card.Panel>
            <p>Below</p>
          </Card.Panel>
        </Card.Columns>
      </Card>
    </div>
  );
}
