import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Divider } from ".";

describe("Divider", () => {
  test("renders correctly horizontally", () => {
    const res = render(<Divider />);
    expect(res.asFragment()).toMatchSnapshot();
  });

  test("renders correctly vertically", () => {
    const res = render(<Divider orientation="vertical" />);
    expect(res.asFragment()).toMatchSnapshot();
  });
});
