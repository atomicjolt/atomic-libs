import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { List } from ".";

describe("List", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<List />);
      expect(res).toMatchSnapshot();
    });
  });
});
