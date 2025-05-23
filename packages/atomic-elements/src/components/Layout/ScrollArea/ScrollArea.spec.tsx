import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { ScrollArea } from ".";

describe("ScrollArea", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<ScrollArea />);
      expect(res).toMatchSnapshot();
    });
  });
});
