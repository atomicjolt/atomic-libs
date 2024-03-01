import React from "react";
import ThreeDotLoader from "../../Loaders/ThreeDotLoader";
import { ErrorBanner } from "../../Banners/DismissableBanner";
import { LoadingMessage, LoadingWrapper } from "./LoadingStatus.styles";

export interface LoadingStatusProps {
  /** Loading status, when true, a loading animation is displayed  */
  readonly isLoading?: boolean;
  /** Optional message to display beneath the loading animation */
  readonly loadingMessage?: React.ReactNode;
  /** Customize what is rendered when in a loading state */
  readonly renderLoading?: (
    isLoading: boolean,
    message: React.ReactNode
  ) => React.ReactNode;
  /** An error. When present, an error banner will be displayed */
  readonly error?: React.ReactNode;
  /** Cutomsize what is rendered when in an error state */
  readonly renderError?: (error: React.ReactNode) => React.ReactNode;
  /** If `loading` is false and `error` is absent, the children will be rendered */
  readonly children?: React.ReactNode;
}

const renderLoadingDefault = (isLoading: boolean, message: React.ReactNode) => {
  return (
    <LoadingWrapper className="aje-loading-status-loading">
      <div>
        <ThreeDotLoader isLoading={isLoading} />
        {message && <LoadingMessage>{message}</LoadingMessage>}
      </div>
    </LoadingWrapper>
  );
};

const renderErrorDefault = (error: React.ReactNode) => {
  return <ErrorBanner>{error}</ErrorBanner>;
};

/** Combination of a loading and error component.
 * Useful when waiting for a resource to load.
 *
 * **Note**: If both an `error` is present and `loading` is true,
 * the error takes precedencs and will be displayed  */
export default function LoadingStatus(props: LoadingStatusProps) {
  const {
    isLoading = false,
    loadingMessage = null,
    renderLoading = renderLoadingDefault,
    error = null,
    renderError = renderErrorDefault,
    children = null,
  } = props;

  if (error) {
    return <>{renderError(error)}</>;
  }

  if (isLoading) {
    return <>{renderLoading(isLoading, loadingMessage)}</>;
  }

  return <>{children}</>;
}
