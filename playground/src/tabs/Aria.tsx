import React, { useMemo, useState } from "react";
import { CustomSelect, Item, ListBox, MultiSelect } from "../elements";

export default function Aria() {
  return (
    <div>
      <MultiSelect
        label="Label"
        defaultSelectedKeys={["1", "2"]}
        isSearchable
        menuSize="auto"
      >
        <Item key="1">
          Here is some longer content to see how the select behaves
        </Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </MultiSelect>
      <CustomSelect label="Label" defaultSelectedKey="1" isSearchable>
        <Item key="1">Item 1</Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </CustomSelect>
      {/* <ListBox aria-label="label" isSearchable>
        <Item key="1">Item 1</Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </ListBox> */}
    </div>
  );
}
