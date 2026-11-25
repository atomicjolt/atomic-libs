import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import { Loading } from ".";

describe("Loading", () => {
  test("puts its id on the wrapper element", () => {
    const { container } = render(
      <Loading id="results" isLoading>
        Content
      </Loading>
    );
    expect(container.querySelector("#results")).not.toBeNull();
  });
});
