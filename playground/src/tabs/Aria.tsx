import React from "react";
import {
  Button,
  Flex,
  MaterialIcon,
  Menu,
  MenuTrigger,
  OverlayTrigger,
  Popover,
  Section,
} from "../elements";

function MyMenuItem(props) {
  return (
    <Menu.Item {...props}>
      {({ isSelected }) => (
        <Flex alignItems="center" gap={8}>
          {isSelected && <MaterialIcon icon="star" />}
          {props.children}
        </Flex>
      )}
    </Menu.Item>
  );
}

export default function Aria() {
  const [page, setPage] = React.useState(2);
  const items = [
    {
      id: "1",
      name: "Item 1",
    },
    {
      id: "2",
      name: "Item 2",
    },
  ];

  return (
    <div>
      <Menu onAction={console.log}>
        <Menu.Section title="Section 1">
          <MyMenuItem>Item 1</MyMenuItem>
          <MyMenuItem>Item 2</MyMenuItem>
          <MyMenuItem>Item 3</MyMenuItem>
        </Menu.Section>
        <Menu.Section title="Section 2">
          <MyMenuItem>Item 1</MyMenuItem>
          <MyMenuItem>Item 2</MyMenuItem>
          <MyMenuItem>Item 3</MyMenuItem>
        </Menu.Section>
      </Menu>
    </div>
  );
}
