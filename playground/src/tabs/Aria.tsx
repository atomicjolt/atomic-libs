import React, { useRef } from "react";
import {
  Button,
  Flex,
  MaterialIcon,
  Menu,
  Popover,
  ListBox,
  CustomSelect,
  SelectField,
  FieldLabel,
  FieldErrorMessage,
  Divider,
  MultiSelectField,
  MultiSelect,
  IconMenu,
  Tabs,
  ComboBoxField,
  FieldInput,
  ComboBox,
  ComboInput,
  IconButton,
  Input,
  FieldMessage,
  ErrorMessage,
  Item,
  Section,
  Group,
} from "../elements";
import { Key, Selection } from "react-stately";

function MyMenuItem(props) {
  return (
    <Menu.Item {...props}>
      {({ isSelected }) => (
        <Flex alignItems="center" gap={8}>
          {props.children}
          {isSelected && <MaterialIcon icon="star" />}
        </Flex>
      )}
    </Menu.Item>
  );
}

export default function Aria() {
  const ref = useRef(null);
  const [selectedKey, setSelectedKey] = React.useState<Key | null>("1");
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
      <ComboBoxField
        onSelectionChange={setSelectedKey}
        selectedKey={selectedKey}
        menuTrigger="focus"
      >
        <FieldLabel>Select an item</FieldLabel>
        <FieldMessage>Some Message</FieldMessage>
        <Group isMerged>
          <Input />
          <IconButton variant="border" icon="search" />
        </Group>
        <Popover>
          <ListBox items={items}>
            {(item) => (
              <ListBox.Section items={item.items} title={item.title}>
                {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
              </ListBox.Section>
            )}
          </ListBox>
        </Popover>
        <ErrorMessage>Something went wrong</ErrorMessage>
      </ComboBoxField>

      <br />
      <ComboBox items={items} menuTrigger="focus" label="label">
        {(item) => (
          <Section items={item.items} title={item.title}>
            {({ name }) => <Item>{name}</Item>}
          </Section>
        )}
      </ComboBox>

      {/* <CustomSelect label="Select an item" items={items}>
        {(item) => (
          <ListBox.Section items={item.items} title={item.title}>
            {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
          </ListBox.Section>
        )}
      </CustomSelect> */}

      {/* <br />
      <SelectField>
        <FieldLabel>Select an item</FieldLabel>
        <SelectField.Button>
          <SelectField.Value placeholder="Select an option" />
        </SelectField.Button>
        <Popover>
          <ListBox items={items}>
            {(item) => (
              <ListBox.Section items={item.items} title={item.title}>
                {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
              </ListBox.Section>
            )}
          </ListBox>
        </Popover>
        <FieldErrorMessage>Something went wrong</FieldErrorMessage>
      </SelectField>

      <CustomSelect label="Select an item" items={items}>
        {(item) => (
          <ListBox.Section items={item.items} title={item.title}>
            {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
          </ListBox.Section>
        )}
      </CustomSelect> */}

      {/* <Menu
        onAction={console.log}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        selectionMode="multiple"
        items={items}
        ref={ref}
      >
        {(item) => (
          <Menu.Section items={item.items} title={item.title}>
            {({ name }) => <MyMenuItem>{name}</MyMenuItem>}
          </Menu.Section>
        )}
      </Menu>

      <IconMenu>
        <Section title="Section 1">
          <Item>Item 1</Item>
        </Section>
        <Section title="Section 2">
          <Item>Item 2</Item>
          <Item>Item 3</Item>
        </Section>
      </IconMenu>

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
      </OverlayTrigger>

      <SelectField>
        <FieldLabel>Select an item</FieldLabel>
        <SelectField.Button>
          <SelectField.Value placeholder="Select an option" />
        </SelectField.Button>
        <Popover>
          <ListBox items={items}>
            {(item) => (
              <ListBox.Section items={item.items} title={item.title}>
                {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
              </ListBox.Section>
            )}
          </ListBox>
        </Popover>
        <FieldErrorMessage>Something went wrong</FieldErrorMessage>
      </SelectField>

      <br />
      <br />

      <CustomSelect label="Select an item" items={items}>
        {(item) => (
          <ListBox.Section items={item.items} title={item.title}>
            {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
          </ListBox.Section>
        )}
      </CustomSelect>

      <br />
      <Divider />
      <br />

      <MultiSelectField
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        ref={ref}
      >
        <FieldLabel>Select an item</FieldLabel>
        <MultiSelectField.Button>Open up!</MultiSelectField.Button>
        <Popover>
          <ListBox items={items}>
            {(item) => (
              <ListBox.Section items={item.items} title={item.title}>
                {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
              </ListBox.Section>
            )}
          </ListBox>
        </Popover>
        <FieldErrorMessage>Something went wrong</FieldErrorMessage>
      </MultiSelectField>

      <br />
      <br />

      <MultiSelect
        label="label"
        items={items}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {(item) => (
          <ListBox.Section items={item.items} title={item.title}>
            {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
          </ListBox.Section>
        )}
      </MultiSelect>

      <br />
      <Divider />
      <br />

      <ListBox
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        aria-label="listbox"
        selectionMode="multiple"
        items={items}
      >
        {(item) => (
          <ListBox.Section items={item.items} title={item.title}>
            {({ name }) => <ListBox.Item>{name}</ListBox.Item>}
          </ListBox.Section>
        )}
      </ListBox> */}
    </div>
  );
}
