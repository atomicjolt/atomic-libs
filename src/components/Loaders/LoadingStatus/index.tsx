import React from "react";
import ThreeDotLoader from "../ThreeDotLoader";
import { ErrorBanner } from "../../Banners/DismissableBanner";
import {
  ErrorStateProps,
  LoaderPlacement,
  LoaderProps,
} from "../Loading.types";

export interface LoadingStatusProps extends LoaderProps {
  /** Loading status, when true, a loading animation is displayed  */
  readonly isLoading?: boolean;

  /** Optional message to display beneath the loading animation */
  readonly loadingMessage?: React.ReactNode;

  /** Placement of the loader */
  readonly loadingPlacement?: LoaderPlacement;

  /** Customize what is rendered when in a loading state */
  readonly renderLoading?: React.ReactNode | React.ComponentType<LoaderProps>;

  /** An error. When present, an error banner will be displayed */
  readonly error?: React.ReactNode;
  /** Customize what is rendered when in an error state */
  readonly renderError?: React.ReactNode | React.ComponentType<ErrorStateProps>;

  /** If `loading` is false and `error` is absent, the children will be rendered */
  readonly children?: React.ReactNode;
}

const ErrorDefault = (props: ErrorStateProps) => {
  const { error } = props;
  return <ErrorBanner>{error}</ErrorBanner>;
};

/** Combination of a loading and error component.
 * Useful when waiting for a resource to load.
 *
 * **Note**: If both an `error` is present and `loading` is true,
 * the error takes precedencs and will be displayed  */
export function LoadingStatus(props: LoadingStatusProps) {
  const {
    isLoading = false,
    renderLoading: Loading = ThreeDotLoader,
    loadingMessage = null,
    loadingPlacement = "inline",
    error = null,
    renderError: Error = ErrorDefault,
    children = null,
  } = props;

  if (error) {
    return typeof Error === "function" ? <Error error={error} /> : Error;
  }

  if (isLoading) {
    return typeof Loading === "function" ? (
      <Loading
        isLoading={isLoading}
        message={loadingMessage}
        placement={loadingPlacement}
      />
    ) : (
      Loading
    );
  }

  return children;
}

export default LoadingStatus;
