import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { ComboBox } from ".";
import { Item } from "../../Atoms/Collection";

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
