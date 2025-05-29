import React from "react";
import { View, Text, Flex, ScrollArea } from "../elements";

export default function Aria() {
  return (
    <>
      <ScrollArea.Root>
        <ScrollArea.Bar orientation="horizontal" />
        <Flex $direction="row" $width="100%" $height="100%">
          <ScrollArea.Viewport style={{ height: 900 }}>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(135deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
                width: 10000,
                height: 10000,
                position: "relative",
              }}
            >
              <p
                style={{
                  position: "absolute",
                  right: 10,
                  bottom: 0,
                  fontSize: 20,
                }}
              >
                hi
              </p>
            </div>
          </ScrollArea.Viewport>

          <ScrollArea.Bar orientation="vertical" size="viewport" />
        </Flex>
      </ScrollArea.Root>
    </>
  );
}
