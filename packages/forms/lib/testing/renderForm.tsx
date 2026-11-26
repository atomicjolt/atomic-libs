import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, vi, type Mock } from "vitest";
import { Form } from "../components/Form";

/** Renders `children` inside a `<Form>` with a submit button, and returns
 * helpers to submit it and read back the submitted values. */
export function renderForm(
  children: React.ReactNode,
  defaultValues?: Record<string, unknown>
) {
  const onSubmit: Mock<(data: Record<string, any>) => void> = vi.fn();
  const user = userEvent.setup();

  const result = render(
    <Form onSubmit={onSubmit} defaultValues={defaultValues}>
      {children}
      <Form.SubmitButton>Submit</Form.SubmitButton>
    </Form>
  );

  async function submit() {
    await user.click(screen.getByRole("button", { name: "Submit" }));
  }

  /** Submits and resolves with the values passed to `onSubmit` */
  async function submitAndGetValues(): Promise<Record<string, any>> {
    await submit();
    await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
    return onSubmit.mock.calls[0][0];
  }

  return { ...result, user, onSubmit, submit, submitAndGetValues };
}
