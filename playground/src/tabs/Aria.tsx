import React from "react";
import {
  View,
  Text,
  Flex,
  IconButton,
  TextInput,
  Button,
  MaterialSymbol,
  MaterialIcon,
} from "../elements";

export default function Aria() {
  return (
    <>
      <IconButton className={{ test: true }} icon="import_contacts" />

      <IconButton
        className={{ test: true }}
        icon={<MaterialIcon icon="import_contacts" />}
      />

      <IconButton className={{ test: true }}>
        <MaterialIcon icon="import_contacts" />
      </IconButton>

      <br />

      <IconButton
        className={{ test: true }}
        icon={<MaterialSymbol symbol="import_contacts" />}
      />

      <IconButton className={{ test: true }}>
        <MaterialSymbol symbol="import_contacts" />
      </IconButton>
    </>
  );
}
