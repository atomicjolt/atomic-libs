import React from "react";
import { render } from "@testing-library/react";
import TextInput, { FloatingTextInput } from ".";

describe("matches snapshot", () => {
  const shared = {
    label: "Text Label",
    message: "message",
    error: "some error",
    placeholder: "placeholder",
    value: "content",
    onChange: (value: string) => {},
  };

  it("default variant", () => {
    const result = render(<TextInput {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  it("floating variant", () => {
    const result = render(<FloatingTextInput {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
