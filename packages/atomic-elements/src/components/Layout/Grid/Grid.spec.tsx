import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Grid } from ".";

describe("Grid", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Grid />);
      expect(res).toMatchSnapshot();
    });
  });
});
