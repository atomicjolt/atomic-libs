import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ToolTipTrigger } from "./ToolTipTrigger";
import { Button } from "../../Buttons/Button";
import { ToolTip } from "./ToolTip";

describe("ToolTip", () => {
  const element = (
    <ToolTipTrigger>
      <Button>Target</Button>
      <ToolTip>Tooltip</ToolTip>
    </ToolTipTrigger>
  );

  test("becomes visible when the user focuses the target element", async () => {
    const user = userEvent.setup();
    render(element);

    await user.keyboard("[Tab]");
    expect(screen.getByText("Tooltip")).toBeTruthy();

    // Once the tooltip is added, it remains in the DOM, but is hidden
    await user.keyboard("[Tab]");
    const tooltip = screen.getByText("Tooltip");
    expect(getComputedStyle(tooltip).getPropertyValue("opacity")).toBe("0");
  });

  // TODO - For some reason, the hover event is not working as expected in this test
  test.skip("becomes visible when the user hovers over the target element", async () => {
    const user = userEvent.setup();
    render(element);

    const button = screen.getByText("Target");
    const tooltip = screen.queryByText("Tooltip");

    expect(button).toBeTruthy();
    expect(tooltip).toBeNull();

    await user.hover(button);

    expect(screen.getByText("Tooltip")).toBeTruthy();
  });
});
