import React from "react";
import {
  Button,
  Flex,
  MaterialIcon,
  Menu,
  OverlayTrigger,
  Popover,
  Item,
  ListBox,
  CustomSelect,
  SelectField,
  FieldLabel,
  FieldErrorMessage,
  SearchInput,
  TextInput,
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
      {/* <Menu
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
      </ListBox> */}

      {/*
      <OverlayTrigger>
        <Button>Open Overlay</Button>
        <Popover variant="listbox">
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
        </Popover>
      </OverlayTrigger> */}

      <SelectField>
        <FieldLabel>Select an item</FieldLabel>
        <SelectField.Button>
          <SelectField.Value placeholder="Select an option" />
        </SelectField.Button>
        <Popover>
          <ListBox>
            <ListBox.Item id="1">Item 1</ListBox.Item>
            <ListBox.Item id="2">Item 2</ListBox.Item>
            <ListBox.Item id="3">Item 3</ListBox.Item>
          </ListBox>
        </Popover>
        <FieldErrorMessage>Something went wrong</FieldErrorMessage>
      </SelectField>

      <br />
      <br />

      <CustomSelect label="Select an item">
        <Item>Here is some much longer content</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </CustomSelect>

      <ListBox
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        aria-label="listbox"
        selectionMode="multiple"
      >
        <ListBox.Item id="1">Item 1</ListBox.Item>
        <ListBox.Item id="2">Item 2</ListBox.Item>
        <ListBox.Item id="3">Item 3</ListBox.Item>
      </ListBox>
    </div>
  );
}
