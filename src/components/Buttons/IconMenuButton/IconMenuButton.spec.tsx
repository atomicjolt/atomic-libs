import React from "react";
import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import IconMenuButton, { IconMenuButtonProps } from ".";
import IconMenu from "../../Dropdowns/IconMenu";

test("matches snapshot", () => {
  const props: IconMenuButtonProps = {
    children: "Button",
    type: "button",
    disabled: false,
    loading: false,
    menuIcon: "more_vert",
    menuLabel: "Custom dropdown label",
    menuDisabled: false,
    menuPosition: "bottom-right",
    menuIconVariant: "default",
    menuChildren: <>
      <IconMenu.Item icon="add_alert" onClick={() => { }}>
        Option 1
      </IconMenu.Item>
      <IconMenu.Item icon="info" onClick={() => { }}>
        Option 2
      </IconMenu.Item>
      <IconMenu.Item icon="alarm_on" onClick={() => { }}>
        Option 3
      </IconMenu.Item>
    </>
  };

  const result = render(
    <IconMenuButton {...props}>
      Button
    </IconMenuButton>
  );

  expect(result.asFragment()).toMatchSnapshot();
});
