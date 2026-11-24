import { describe, expect, it } from "vitest";
import { grid } from "../grid";

describe("grid $flow", () => {
  it("passes single keywords through", () => {
    expect(grid({ $flow: "column" }).gridAutoFlow).toBe("column");
    expect(grid({ $flow: "dense" }).gridAutoFlow).toBe("dense");
  });

  it("writes the dense combinations as valid CSS", () => {
    expect(grid({ $flow: "row-dense" }).gridAutoFlow).toBe("row dense");
    expect(grid({ $flow: "column-dense" }).gridAutoFlow).toBe("column dense");
  });
});
