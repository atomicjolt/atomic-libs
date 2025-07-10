import { fireEvent, render, screen } from "@testing-library/react";
import { expect, describe, test, vi } from "vitest";
import { Chip } from ".";

describe("Chip", () => {
  test("matches snapshot", () => {
    const result = render(<Chip>Item</Chip>);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("onRemove", () => {
    const onRemove = vi.fn();
    render(<Chip onRemove={onRemove}>Item</Chip>);
    fireEvent.click(screen.getByRole("button"));
    expect(onRemove).toHaveBeenCalledOnce();
  });
});
