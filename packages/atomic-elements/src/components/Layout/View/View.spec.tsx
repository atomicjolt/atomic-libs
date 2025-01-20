import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { View } from ".";

describe("View", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<View />);
      expect(res).toMatchSnapshot();
    });
  });
});
