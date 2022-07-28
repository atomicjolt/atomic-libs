import React from "react";
import ThreeDotLoader from "../../Loaders/ThreeDotLoader";
import { ErrorBanner } from "../../Banners/DismissableBanner";
export interface Props {
  /** Loading status, when true, a loading animation is displayed  */
  readonly loading?: boolean;
  /** Optinal message to display beneath the loading animation */
  readonly loadingMessage?: React.ReactNode;
  /** Customize what is rendered when in a loading state */
  readonly renderLoading?: (
    loading: boolean,
    message: React.ReactNode
  ) => React.ReactNode;
  /** An error. When present, an error banner will be displayed */
  readonly error?: React.ReactNode;
  /** Cutomsize what is rendered when in an error state */
  readonly renderError?: (error: React.ReactNode) => React.ReactNode;
  /** If `loading` is false and `error` is absent, the children will be rendered */
  readonly children?: React.ReactNode;
}

const renderLoadingDefault = (loading: boolean, message: React.ReactNode) => {
  return (
    <div className="aje-loading-status-loading">
      <div>
        <ThreeDotLoader loading={loading} />
        {message && <p>{message}</p>}
      </div>
    </div>
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
export default function LoadingStatus({
  loading = false,
  loadingMessage = null,
  renderLoading = renderLoadingDefault,
  error = null,
  renderError = renderErrorDefault,
  children = null,
}: Props) {
  if (error) {
    return <>{renderError(error)}</>;
  }

  if (loading) {
    return <>{renderLoading(loading, loadingMessage)}</>;
  }

  return <>{children}</>;
}
