import React from "react";
import { describe, test, expect } from "vitest";
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

  test("default variant", () => {
    const result = render(<TextInput {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("floating variant", () => {
    const result = render(<TextInput variant="floating" {...shared} />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
