import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ButtonGroup } from ".";
import { Button } from "../Button";

describe("ButtonGroup", () => {
  test("applies style to the group, not the buttons", () => {
    const { container } = render(
      <ButtonGroup style={{ marginTop: "7px" }}>
        <Button>One</Button>
      </ButtonGroup>
    );
    const group = container.firstElementChild as HTMLElement;
    expect(group.style.marginTop).toBe("7px");
    expect(screen.getByRole("button").style.marginTop).toBe("");
  });

  test("renders the group as the element given by `as`", () => {
    const { container } = render(
      <ButtonGroup as="span">
        <Button>One</Button>
      </ButtonGroup>
    );
    expect(container.firstElementChild!.tagName).toBe("SPAN");
    expect(screen.getByRole("button").tagName).toBe("BUTTON");
  });

  test("labels the group, not the buttons", () => {
    render(
      <ButtonGroup aria-label="Text alignment">
        <Button>Left</Button>
      </ButtonGroup>
    );
    expect(screen.getByRole("group", { name: "Text alignment" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Left" })).toBeTruthy();
  });

  test("passes button props to every button", () => {
    render(
      <ButtonGroup isDisabled>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    );
    for (const button of screen.getAllByRole("button")) {
      expect(button.hasAttribute("disabled")).toBe(true);
    }
  });
});
