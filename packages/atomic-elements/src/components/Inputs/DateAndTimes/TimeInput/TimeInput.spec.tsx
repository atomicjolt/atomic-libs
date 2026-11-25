import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Time } from "@internationalized/date";
import { TimeInput } from ".";

describe("TimeInput", () => {
  it("shows the error message when invalid", () => {
    render(<TimeInput label="Start" isInvalid error="Pick a time" />);
    expect(screen.getByText("Pick a time")).toBeInTheDocument();
  });

  it("hides the error message when valid", () => {
    render(<TimeInput label="Start" error="Pick a time" />);
    expect(screen.queryByText("Pick a time")).not.toBeInTheDocument();
  });

  it("is labelled and described", () => {
    render(<TimeInput label="Start" message="Local time" defaultValue={new Time(9, 30)} />);
    expect(screen.getByRole("group", { name: "Start", description: /Local time/ })).toBeInTheDocument();
  });
});
