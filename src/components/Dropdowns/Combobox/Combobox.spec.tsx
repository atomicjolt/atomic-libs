import React from "react";
import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Combobox from ".";

describe("matches snapshots", () => {
  const shared = {
    label: "Text Label",
    message: "message",
    error: "some error",
    value: "content",
    onChange: (value: any) => {},
    options: ["Option 1", "Option 2", "Option 3"],
  };

  test("matches default variant", () => {
    const result = render(<Combobox {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("matches floating variant", () => {
    const result = render(<Combobox variant="floating" {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
