import { render, screen } from "@testing-library/react";
import { expect, it, describe, vi } from "vitest";
import { CanvasAuthenticationForm } from "./CanvasAuthenticationForm";

describe("CanvasAuthenticationForm", () => {
  it("renders form with action and children", () => {
    render(
      <CanvasAuthenticationForm action="/submit" data-testid="canvas-auth-form">
        <button type="submit">Submit</button>
      </CanvasAuthenticationForm>
    );
    const form = screen.getByTestId("canvas-auth-form");
    expect(form).toHaveAttribute("action", "/submit");
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("renders hidden inputs for settings", () => {
    const settings = { key1: "value1", key2: "value2" };
    render(
      <CanvasAuthenticationForm
        action="/submit"
        settings={settings}
        data-testid="canvas-auth-form"
      />
    );
    expect(screen.getByTestId("canvas-auth-form")).toHaveFormValues(settings);
  });

  it("auto submits the form when autoSubmit is true", () => {
    const submitSpy = vi.fn();
    HTMLFormElement.prototype.submit = submitSpy;

    render(<CanvasAuthenticationForm action="/submit" autoSubmit={true} />);
    expect(submitSpy).toHaveBeenCalled();
  });

  it("does not auto submit the form when autoSubmit is false", () => {
    const submitSpy = vi.fn();
    HTMLFormElement.prototype.submit = submitSpy;

    render(<CanvasAuthenticationForm action="/submit" autoSubmit={false} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });
});
