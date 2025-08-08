import React, { useRef } from "react";
import {
  View,
  Text,
  Flex,
  SearchInput,
  Button,
  SearchField,
  Input,
  Label,
  Message,
  ErrorMessage,
  ComboInput,
  IconButton,
} from "../elements";

export default function Aria() {
  const ref = useRef<HTMLInputElement>(null);
  console.log(ref);

  return (
    <>
      <SearchField ref={ref} onSubmit={console.log}>
        <Label>Search</Label>
        <Message>Message</Message>
        <ComboInput>
          <Input />
          <IconButton slot="submit" variant="inverted" icon="text_decrease">
            Search
          </IconButton>
        </ComboInput>
      </SearchField>
      <SearchInput onSubmit={console.log} />
    </>
  );
}
