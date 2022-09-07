import React from "react";
import { render } from "@testing-library/react";
import Combobox, { FloatingCombobox } from ".";

describe("matches snapshots", () => {
  const shared = {
    label: "Text Label",
    message: "message",
    error: "some error",
    value: "content",
    onChange: (value: any) => {},
    options: ["Option 1", "Option 2", "Option 3"],
  };

  it("matches default variant", () => {
    const result = render(<Combobox {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  it("matches floating variant", () => {
    const result = render(<FloatingCombobox {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
