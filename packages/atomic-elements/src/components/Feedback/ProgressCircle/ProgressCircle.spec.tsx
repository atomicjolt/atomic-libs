import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { ProgressCircle } from ".";

describe("ProgressCircle", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<ProgressCircle />);
      expect(res).toMatchSnapshot();
    });
  });
});
