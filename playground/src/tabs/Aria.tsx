import React from "react";
import {
  Button,
  CustomSelect,
  Flex,
  MaterialIcon,
  Menu,
  MenuTrigger,
  OverlayTrigger,
  Popover,
  Section,
  Item,
  ListBox,
} from "../elements";
import { Selection } from "react-stately";

function MyItem(props) {
  return (
    <Item {...props}>
      {({ isSelected }: any) => (
        <Flex alignItems="center" gap={8}>
          {props.children}
          {isSelected && <MaterialIcon icon="star" />}
        </Flex>
      )}
    </Item>
  );
}

export default function Aria() {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set("1")
  );

  const items = [
    {
      id: "section-1",
      title: "Section 1",
      items: [
        { id: "1", name: "Item 1" },
        { id: "2", name: "Item 2" },
        { id: "3", name: "Item 3" },
      ],
    },
    {
      id: "section-2",
      title: "Section 2",
      items: [
        { id: "4", name: "Item 4" },
        { id: "5", name: "Item 5" },
        { id: "6", name: "Item 6" },
      ],
    },
  ];

  return (
    <div>
      <Menu
        onAction={console.log}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        selectionMode="multiple"
        items={items}
      >
        {(item) => (
          <Menu.Section items={item.items} title={item.title}>
            {({ name }) => <MyItem>{name}</MyItem>}
          </Menu.Section>
        )}
      </Menu>

      <ListBox
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        items={items}
      >
        {(item) => (
          <ListBox.Section items={item.items} title={item.title}>
            {({ name }) => <MyItem>{name}</MyItem>}
          </ListBox.Section>
        )}
      </ListBox>

      {/* <CustomSelect>
        <Item key="1">Item 1</Item>
        <Item key="2">Item 2</Item>
        <Item key="3">Item 3</Item>
      </CustomSelect> */}
    </div>
  );
}
