import React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ComboBox } from ".";
import { Item } from "../../Collection";

describe("matches snapshots", () => {
  const shared = {
    label: "Text Label",
    message: "message",
    error: "some error",
    value: "content",
    onChange: (value: any) => {},
    children: [<Item key="opt1">Item 1</Item>, <Item key="opt2">Item 2</Item>],
  };

  test("matches default variant", () => {
    const result = render(<ComboBox {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("matches floating variant", () => {
    const result = render(<ComboBox variant="floating" {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});

describe("the open listbox", () => {
  // A ComboBox keeps focus in its own input while the listbox is open, so its
  // popover has to be non-modal. `usePopover`'s modal branch calls
  // `ariaHideOutside(..., { shouldUseInert: true })`, which marks everything
  // outside the popover `inert` — including the input that opened it, leaving
  // it impossible to focus or type in.
  test("leaves the input interactive rather than inert", async () => {
    const user = userEvent.setup();
    render(
      <ComboBox label="Terms">
        <Item key="fall" id="fall">
          Fall
        </Item>
        <Item key="spring" id="spring">
          Spring
        </Item>
      </ComboBox>
    );

    const input = screen.getByRole("combobox");
    await user.click(input);
    await user.keyboard("Fa");

    // `hidden: true` because `ariaHideOutside` marks the surrounding nodes
    // aria-hidden, which the accessible queries otherwise filter out.
    expect(screen.getByRole("listbox", { hidden: true })).toBeInTheDocument();
    expect(input.closest("[inert]")).toBeNull();
    expect(document.activeElement).toBe(input);
    expect(input).toHaveValue("Fa");
  });
});
