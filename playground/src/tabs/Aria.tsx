import React from "react";
import { View, Text, Flex, ScrollArea } from "../elements";

export default function Aria() {
  return (
    <ScrollArea.Root
      aria-label="test"
      data-testid="test"
      style={{ width: 1000, height: 1000 }}
    >
      <ScrollArea.Bar orientation="horizontal" />
      <Flex $direction="row" $width="100%" $height="100%">
        <ScrollArea.Viewport>
          <div
            style={{
              backgroundImage:
                "linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)",
              backgroundSize: "20px 20px",
              width: 10000,
              height: 10000,
            }}
          />
        </ScrollArea.Viewport>

        <ScrollArea.Bar orientation="vertical" />
      </Flex>
    </ScrollArea.Root>
  );
}
