import React, { useMemo } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { BaseProps, LoadingProps } from "../../../types";
import { LoadingContext } from "./Loading.context";
import { useRenderProps } from "@hooks";
import { useTranslations } from "@hooks/useTranslations";

export interface LoadingProviderProps extends BaseProps, LoadingProps {
  children?: React.ReactNode;
}

/** Provides an ambient loading state to descendant components.
 * Any component that reads its loading state with `useLoading` will
 * pick this up unless it is given its own local loading props, which
 * take priority over the ambient state. */
export function Loading(props: LoadingProviderProps) {
  const { isLoading, loadingLabel } = props;

  const t = useTranslations();

  const value = useMemo<LoadingProps>(
    () => ({ isLoading, loadingLabel: t("loading") }),
    [isLoading, loadingLabel]
  );

  const renderProps = useRenderProps<LoadingProps>({
    componentClassName: "aje-loading",
    values: value,
    ...props,
  });

  return (
    <LoadingContext.Provider value={value}>
      <div {...renderProps} aria-busy={isLoading ? "true" : undefined}>
        <VisuallyHidden role="status" aria-live="polite">
          {isLoading ? loadingLabel : ""}
        </VisuallyHidden>
        {renderProps.children}
      </div>
    </LoadingContext.Provider>
  );
}
