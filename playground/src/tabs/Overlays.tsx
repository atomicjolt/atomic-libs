import React from "react";
import {
  Button,
  ComboBox,
  CustomSelect,
  IconMenu,
  Item,
  MaterialIcon,
  Menu,
  MenuTrigger,
  Popover,
  OverlayTrigger,
  Pressable,
  Modal,
  IconButton,
} from "../elements";

export default function Overlays() {
  return (
    <div>
      <MenuTrigger>
        <Button>
          Open Menu
          <MaterialIcon icon="arrow_drop_down" />
        </Button>
        <Popover placement="bottom left">
          <Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </Popover>
      </MenuTrigger>

      <br />

      <IconMenu>
        <IconMenu.Item onAction={() => alert("hi")}>Item 1</IconMenu.Item>
        <IconMenu.Item>Item 2</IconMenu.Item>
        <IconMenu.Item>Item 3</IconMenu.Item>
      </IconMenu>

      <CustomSelect
        label="Custom Select"
        onSelectionChange={(v) => console.log(v, typeof v)}
      >
        <Item key="string">Item 1</Item>
        <Item key={2}>Item 2</Item>
        <Item key={3}>Item 3</Item>
      </CustomSelect>

      <ComboBox menuTrigger="focus" label="Combobox">
        <Item key="string">Item 1</Item>
      </ComboBox>

      <OverlayTrigger type="dialog">
        <Pressable>
          <button>Open Popover</button>
        </Pressable>
        <Popover>
          <div
            style={{
              backgroundColor: "var(--background-clr-inverted",
              color: "var(--text-clr-inverted)",
              width: "var(--trigger-width)",
              fontSize: "20px",
            }}
          >
            Hi There
          </div>
        </Popover>
      </OverlayTrigger>

      <br />

      <OverlayTrigger>
        <Button>Open Modal</Button>
        <Modal>
          {(close) => (
            <>
              <Modal.Header>
                <Modal.Title>Modal Title</Modal.Title>
                <IconButton icon="close" onPress={close} />
              </Modal.Header>
              <Modal.Body>
                <p>Modal Body</p>
              </Modal.Body>
            </>
          )}
        </Modal>
      </OverlayTrigger>
    </div>
  );
}
