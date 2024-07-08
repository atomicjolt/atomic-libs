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
      <ToolTip transitionDuration={0}>Tooltip</ToolTip>
    </ToolTipTrigger>
  );

  test("becomes visible when the user focuses the target element", async () => {
    const user = userEvent.setup();
    render(element);

    expect(screen.queryByText("Tooltip")).toBeNull();

    await user.keyboard("[Tab]");
    expect(screen.getByText("Tooltip")).toBeTruthy();

    // Gets removed from the DOM when the user focuses away
    await user.keyboard("[Tab]");
    expect(screen.queryByText("Tooltip")).toBeNull();
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
