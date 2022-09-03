import React from "react";
import { render } from "@testing-library/react";
import TextInput from ".";

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
    const result = render(<TextInput variant="default" {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  it("floating variant", () => {
    const result = render(<TextInput variant="floating" {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
