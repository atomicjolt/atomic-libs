import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Strong } from ".";

describe("Strong", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Strong />);
      expect(res).toMatchSnapshot();
    });
  });
});
