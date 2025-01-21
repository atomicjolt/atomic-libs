import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Em } from ".";

describe("Em", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Em />);
      expect(res).toMatchSnapshot();
    });
  });
});
