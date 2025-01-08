import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Disclosure } from ".";

describe("Disclosure", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Disclosure />);
      expect(res).toMatchSnapshot();
    });
  });
});
