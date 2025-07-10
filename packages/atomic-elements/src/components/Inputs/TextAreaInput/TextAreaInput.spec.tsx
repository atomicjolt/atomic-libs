import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { TextAreaInput } from ".";

describe("TextAreaInput", () => {
  it("matches snapshot", () => {
    const result = render(<TextAreaInput label="label" />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  it("renders label", () => {
    const result = render(<TextAreaInput label="label" />);
    expect(result.getByText("label")).toBeInTheDocument();
  });

  it("renders error", () => {
    const result = render(<TextAreaInput error="error" isInvalid />);
    expect(result.getByText("error")).toBeInTheDocument();
  });

  it("renders message", () => {
    const result = render(<TextAreaInput message="message" />);
    expect(result.getByText("message")).toBeInTheDocument();
  });

  it("sets the value", () => {
    const result = render(<TextAreaInput value="value" />);
    expect(result.getByDisplayValue("value")).toBeInTheDocument();
  });
});
