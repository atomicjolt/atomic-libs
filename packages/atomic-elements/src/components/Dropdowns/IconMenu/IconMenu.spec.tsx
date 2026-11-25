import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconMenu } from ".";
import { Item } from "../../Collection";

describe("IconMenu", () => {
  test("applies buttonVariant to the trigger button", () => {
    render(
      <IconMenu aria-label="More options" buttonVariant="ghost">
        <Item key="edit">Edit</Item>
      </IconMenu>
    );
    const trigger = screen.getByRole("button", { name: "More options" });
    expect(trigger.className).toContain("aje-btn--ghost");
  });
});
