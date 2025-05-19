import React from "react";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { IconButton } from ".";

describe("IconButton", () => {
  it("matches snapshot", () => {
    const result = render(
      <IconButton aria-label="More Button" icon="more_vert" />
    );
    expect(result.asFragment()).toMatchSnapshot();
  });

  it("supports dynamic className", () => {
    const { getByRole } = render(
      <IconButton
        className={{ test: true }}
        aria-label="More Button"
        icon="more_vert"
      />
    );
    expect(getByRole("button")).toHaveClass("test");
  });
});
