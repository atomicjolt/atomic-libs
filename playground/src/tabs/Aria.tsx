import React, { useMemo, useState } from "react";
import { Item, ListBox, MultiSelect } from "../elements";

export default function Aria() {
  return (
    <div>
      <MultiSelect label="Label" defaultSelectedKeys={["1", "2"]} isSearchable>
        <Item key="1">Item 1</Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </MultiSelect>
      <ListBox aria-label="label" isSearchable>
        <Item key="1">Item 1</Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </ListBox>
    </div>
  );
}
