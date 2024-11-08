import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Checkmark } from ".";

describe("Checkmark", () => {
  it("should match snapshot", () => {
    const res = render(<Checkmark />);
    expect(res.container).toMatchSnapshot();
  });
});
