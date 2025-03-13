import React from "react";
import { View, Text, Flex, ChipGroup, Item } from "@atomicjolt/atomic-elements";

export default function Aria() {
  return (
    <ChipGroup label="Label">
      <Item>
        <Text>Chip 1</Text>
      </Item>
      <Item>
        <Text>Chip 2</Text>
      </Item>
    </ChipGroup>
  );
}
