import React from "react";
import { View, Text, Flex } from "../elements";

export default function Aria() {
  return (
    <Flex $direction="column" $gap="3">
      <Text $size="1">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="2">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="3">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="4">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="5">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="6">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="7">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="8">The quick brown fox jumps over the lazy dog.</Text>
      <Text $size="9">The quick brown fox jumps over the lazy dog.</Text>
    </Flex>
  );
}
