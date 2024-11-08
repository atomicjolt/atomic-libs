import { render } from "@testing-library/react";
import { expect, describe, test } from "vitest";
import { Chip } from ".";

describe("Chip", () => {
  test("matches snapshot", () => {
    const result = render(<Chip>Item</Chip>);
    expect(result.asFragment()).toMatchSnapshot();
  });
});
