import { render, fireEvent } from "@testing-library/react";
import { expect, it, describe, vi } from "vitest";
import {
  DismissableBanner,
  ErrorBanner,
  WarningBanner,
} from "./DismissableBanner.component";

describe("DismissableBanner", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<DismissableBanner />);
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with icon", () => {
      const res = render(<DismissableBanner icon="info" />);
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with dismiss button", () => {
      const res = render(<DismissableBanner onDismiss={() => {}} />);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Functionality", () => {
    it("should call onDismiss when dismiss button is clicked", () => {
      const onDismiss = vi.fn();
      const { getByLabelText } = render(
        <DismissableBanner onDismiss={onDismiss} />
      );
      fireEvent.click(getByLabelText("dismiss info"));
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });
});

describe("ErrorBanner", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<ErrorBanner />);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Functionality", () => {
    it("should call onDismiss when dismiss button is clicked", () => {
      const onDismiss = vi.fn();
      const { getByLabelText } = render(<ErrorBanner onDismiss={onDismiss} />);
      fireEvent.click(getByLabelText("dismiss error"));
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });
});

describe("WarningBanner", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<WarningBanner />);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Functionality", () => {
    it("should call onDismiss when dismiss button is clicked", () => {
      const onDismiss = vi.fn();
      const { getByLabelText } = render(
        <WarningBanner onDismiss={onDismiss} />
      );
      fireEvent.click(getByLabelText("dismiss warning"));
      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });
});
