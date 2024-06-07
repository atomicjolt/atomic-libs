import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MultiSelect } from ".";

describe("MultiSelect", () => {
  test("matches default variant", () => {
    const res = render(<MultiSelect label="label" />);
    expect(res.asFragment()).toMatchSnapshot();
  });

  test("matches floating variant", () => {
    const res = render(<MultiSelect label="label" variant="floating" />);
    expect(res.asFragment()).toMatchSnapshot();
  });
});
