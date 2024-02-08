import React, { useState } from "react";
import { Button, ButtonGroup, IconButton, IconMenu, Item } from "../elements";
import styled from "styled-components";
import { HasVariant } from "../../../src/types";
import { ButtonVariants } from "../../../src/components/Buttons/Buttons.types";
import classNames from "classnames";

export default function AriaComponents() {
  const [key, setKey] = useState<React.Key>("1");

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <ButtonGroup variant="border" isMerged>
        <Button onPress={() => console.log("hi")}>Hello There</Button>
        <Button onPress={() => console.log("hi")}>Hello There</Button>
        <IconButton icon="add" />
        <IconMenu icon="delete">
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </IconMenu>
      </ButtonGroup>
    </div>
  );
}
