import React from "react";
import { View, Text, Flex, Button } from "@atomicjolt/atomic-elements";
import { CanvasAuthenticationForm } from "@atomicjolt/canvas-client";

export default function Aria() {
  return (
    <CanvasAuthenticationForm
      action="https://example.com"
      settings={{
        oauth_state: "12345",
        array: [1, 2, 3],
        object: { key: "value" },
      }}
    >
      <Button type="submit">Authorize</Button>
    </CanvasAuthenticationForm>
  );
}
