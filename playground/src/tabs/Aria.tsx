import React from "react";
import { Flex } from "../elements";

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
    <Flex direction="row" alignContent="s">
      <Flex.Item grow={1} basis={500}>
        <div style={{ backgroundColor: "red", height: "200px" }} />
      </Flex.Item>
      <Flex.Item basis={200}>
        <div style={{ backgroundColor: "blue", height: "200px" }} />
      </Flex.Item>
      <Flex.Item grow={2}>
        <div style={{ backgroundColor: "green", height: "200px" }} />
      </Flex.Item>
    </Flex>
  );
}
