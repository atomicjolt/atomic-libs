import React from "react";
import { render } from "@testing-library/react";
import IconMenuButton from ".";
import IconMenu from "../../Dropdowns/IconMenu";

it("matches snapshot", () => {
  const result = render(
    <IconMenuButton iconMenuProps={{
        icon: "more_vert",
        label: "Custom dropdown label",
        disabled: false,
        position: "bottom-left",
        iconVariant: "default",
        children: <>
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
      }}>
        Button
      </IconMenuButton>
  );
  expect(result.asFragment()).toMatchSnapshot();
});
