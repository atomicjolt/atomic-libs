import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  CustomSelect,
  IconButton,
  IconMenu,
  Item,
  SearchInput,
  Select,
} from "../elements";
import styled from "styled-components";
import { HasVariant } from "../../../src/types";
import { ButtonVariants } from "../../../src/components/Buttons/Buttons.types";
import classNames from "classnames";

export default function AriaComponents() {
  const [selected, setSelected] = useState<any>("one");

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      {/* <Select value={selected} onChange={setSelected} label="Label">
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </Select>
      <CustomSelect
        label="Label"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Item key="one" textValue="One">
          One
        </Item>
        <Item key="two" textValue="Two">
          Two
        </Item>
        <Item key="three" textValue="Three">
          Three
        </Item>
      </CustomSelect> */}
      <SearchInput onSubmit={alert} />
    </div>
  );
}
