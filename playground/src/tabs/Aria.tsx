import React from "react";
import { View, Text, Flex, IconButton, TextInput, Button } from "../elements";

export default function Aria() {
  return (
    <>
      <IconButton className={{ test: true }} icon="import_contacts" />

      <Button className={{ test: true }}>Test</Button>

      <TextInput className={{ test: true }} label="Name" />
    </>
  );
}
