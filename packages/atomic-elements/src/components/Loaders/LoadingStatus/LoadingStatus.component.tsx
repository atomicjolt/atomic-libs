import React from "react";
import { ThreeDotLoader } from "../ThreeDotLoader";
import { ErrorBanner } from "../../Banners/DismissableBanner";
import { ErrorStateProps, LoaderPlacement } from "../Loader/Loader.types";
import { LoaderProps } from "../Loader";

export interface LoadingStatusProps<T> {
  readonly children?: React.ReactNode | ((data: T) => React.ReactNode);
  /** The data to render when not in a loading state */
  readonly data?: T | null;

  /** Fallback if data is null */
  readonly fallback?: React.ReactNode;

  /** Loading status, when true, a loading animation is displayed  */
  readonly isLoading?: boolean;

  /** Optional message to display beneath the loading animation */
  readonly loadingMessage?: React.ReactNode;

  /** Placement of the loader */
  readonly loadingPlacement?: LoaderPlacement;

  /** Direction of the loader and message placement */
  readonly loadingOrientation?: "horizontal" | "vertical";

  /** Customize what is rendered when in a loading state */
  readonly renderLoading?: React.ReactNode | React.ComponentType<LoaderProps>;

  /** An error. When present, an error banner will be displayed */
  readonly error?: React.ReactNode;
  /** Customize what is rendered when in an error state */
  readonly renderError?: React.ReactNode | React.ComponentType<ErrorStateProps>;
}

const ErrorDefault = (props: ErrorStateProps) => {
  const { error } = props;
  return <ErrorBanner>{error}</ErrorBanner>;
};

/** Component to render the status of a loading resource.
 * - When `isLoading` is true, a loading animation is displayed.
 * - When `error` is present, an error banner is displayed.
 * - Otherwise, the `children` are rendered
 */
export function LoadingStatus<T>(props: LoadingStatusProps<T>) {
  const {
    isLoading = false,
    renderLoading: Loading = ThreeDotLoader,
    loadingMessage = null,
    loadingPlacement = "center",
    loadingOrientation,
    error = null,
    renderError: ErrorComp = ErrorDefault,
    children = null,
    data,
    fallback,
  } = props;

  if (error) {
    return typeof ErrorComp === "function" ? (
      <ErrorComp error={error} />
    ) : (
      ErrorComp
    );
  }

  if (isLoading) {
    return typeof Loading === "function" ? (
      <Loading
        isLoading={isLoading}
        message={loadingMessage}
        placement={loadingPlacement}
        orientation={loadingOrientation}
      />
    ) : (
      Loading
    );
  }

  if (data !== undefined) {
    if (typeof children !== "function") {
      throw new Error(
        "LoadingStatus was provided a data prop but children is not a function."
      );
    }

    if (data === null) {
      return fallback;
    }

    return children(data);
  }

  if (typeof children === "function") {
    throw new Error(
      "LoadingStatus was provided a children function but no data was present."
    );
  }

  return children;
}
