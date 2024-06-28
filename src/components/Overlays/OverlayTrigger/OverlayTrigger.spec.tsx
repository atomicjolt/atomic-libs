import { act, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { OverlayTrigger } from ".";
import { Button } from "../../Buttons/Button";
import { Modal } from "../Modal";

describe("OverlayTrigger", () => {
  it("Matches the closed snapshot", () => {
    const res = render(
      <OverlayTrigger>
        <Button>Trigger</Button>
        <Modal>
          <div>Content</div>
        </Modal>
      </OverlayTrigger>
    );
    expect(res.asFragment()).toMatchSnapshot();
  });

  it("Matches the open snapshot", () => {
    const onOpenChange = vi.fn();
    const res = render(
      <OverlayTrigger onOpenChange={onOpenChange}>
        <Button>Trigger</Button>
        <Modal>
          <div>Content</div>
        </Modal>
      </OverlayTrigger>
    );

    act(() => {
      res.getByText("Trigger").click();
    });

    expect(res.asFragment()).toMatchSnapshot();
    expect(onOpenChange).toHaveBeenCalledOnce();
    expect(onOpenChange).toHaveBeenCalledWith(true);
  });
});
