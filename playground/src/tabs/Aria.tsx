import React from "react";
import { View, Text, Flex, ScrollArea } from "../elements";

export default function Aria() {
  return (
    <>
      <ScrollArea.Root
        aria-label="test"
        data-testid="test"
        // style={{ width: 1000, height: 1000, marginBottom: 30 }}
      >
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

          <View $flexShrink="0">
            <ScrollArea.Bar orientation="vertical" />
          </View>
        </Flex>
      </ScrollArea.Root>

      <div
        style={{ marginTop: 20, width: 1000, height: 1000, overflow: "auto" }}
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(135deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)",
            width: 10000,
            height: 10000,
            position: "relative",
          }}
        />
      </div>
    </>
  );
}
