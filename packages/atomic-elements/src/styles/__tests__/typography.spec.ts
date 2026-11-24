import { describe, expect, it } from "vitest";
import { typography } from "../typography";

describe("typography $wrap", () => {
  it("keeps text on one line with nowrap", () => {
    const styles = typography({ $wrap: "nowrap" });
    expect(styles.whiteSpace).toBe("nowrap");
    expect(styles.textWrap).toBeUndefined();
  });

  it("maps pretty and balanced to text-wrap", () => {
    expect(typography({ $wrap: "pretty" }).textWrap).toBe("pretty");
    // CSS spells it "balance".
    expect(typography({ $wrap: "balanced" }).textWrap).toBe("balance");
    expect(typography({ $wrap: "balanced" }).whiteSpace).toBeUndefined();
  });

  it("lets $truncate force nowrap", () => {
    expect(typography({ $truncate: true }).whiteSpace).toBe("nowrap");
  });
});
