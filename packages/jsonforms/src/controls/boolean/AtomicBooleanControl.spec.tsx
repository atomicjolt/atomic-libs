import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { controlFor, renderForm } from "../../testing/renderForm";
import { renderCell } from "../../testing/renderCell";

const schema = {
  type: "object",
  properties: { active: { type: "boolean", title: "Active", description: "Shown to users" } },
} as const;

describe("AtomicCheckBoxControl", () => {
  it("toggles the value", async () => {
    const form = renderForm(schema, { uischema: controlFor("active") });

    const checkbox = screen.getByRole("checkbox", { name: "Active" });
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);

    await waitFor(() => expect(form.latestData()).toEqual({ active: true }));
    expect(screen.getByText("Shown to users")).toBeInTheDocument();
  });

  it("renders as a cell", async () => {
    const form = renderCell(schema, "active", { data: { active: true } });

    const checkbox = screen.getByRole("checkbox", { name: "Active" });
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);

    await waitFor(() => expect(form.latestData()).toEqual({ active: false }));
  });
});

describe("AtomicToggleControl", () => {
  it("renders a switch for options.toggle", async () => {
    const form = renderForm(schema, { uischema: controlFor("active", { toggle: true }) });

    await userEvent.click(screen.getByRole("switch", { name: "Active" }));

    await waitFor(() => expect(form.latestData()).toEqual({ active: true }));
    expect(screen.getByText("Shown to users")).toBeInTheDocument();
  });

  it("is disabled in a readonly form (ToggleSwitch has no read-only state)", () => {
    renderForm(schema, { uischema: controlFor("active", { toggle: true }), readonly: true });
    expect(screen.getByRole("switch", { name: "Active" })).toBeDisabled();
  });
});
