import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Text } from ".";

describe("Text", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Text />);
      expect(res).toMatchSnapshot();
    });
  });
});
