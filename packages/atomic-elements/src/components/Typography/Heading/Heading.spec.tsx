import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Heading } from ".";

describe("Heading", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Heading />);
      expect(res).toMatchSnapshot();
    });
  });
});
