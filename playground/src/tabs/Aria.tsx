import React from "react";
import { ComboBox, Flex, FlexItem } from "../elements";

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
    <Flex direction="row" alignContent="center">
      <FlexItem grow={1} basis={500}>
        <div style={{ backgroundColor: "red", height: "200px" }} />
      </FlexItem>
      <FlexItem basis={200}>
        <div style={{ backgroundColor: "blue", height: "200px" }} />
      </FlexItem>
      <FlexItem grow={2}>
        <div
          style={{
            backgroundColor: "green",
            height: "200px",
          }}
        />
      </FlexItem>
    </Flex>
  );
}
