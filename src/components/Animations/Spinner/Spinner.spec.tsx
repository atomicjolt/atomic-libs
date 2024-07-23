import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from ".";

describe("Spinner", () => {
  it("matches snapshot", () => {
    const res = render(<Spinner />);
    expect(res.asFragment()).toMatchSnapshot();
  });
});
