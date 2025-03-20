import { forwardRef } from "react";
import { useId } from "@react-aria/utils";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ScreenReaderOnly } from "@components/Accessibility/ScreenReaderOnly";
import { LoadingContext, LoadingState } from "./Loading.context";
import { LoadingWrapper } from "./Loading.styles";
import { LoadingProvider } from "./Loading.provider";

export interface LoadingProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement>,
    Partial<LoadingState> {
  /** A message to display to screenreaders when content is in a loading state */
  loadingMessage?: React.ReactNode;
}

export const Loading = forwardRef<HTMLDivElement, LoadingProps>(
  function Loading(props, ref) {
    [props, ref] = useContextProps(LoadingContext, props, ref);
    const {
      className,
      style,
      children,
      isLoading,
      loadingMessage = "Loading content...",
      buttonBehavior,
      ...rest
    } = props;

    const loadingId = useId(props.id);

    const renderProps = useRenderProps({
      componentClassName: "aje-loading",
      className,
      style,
      children,
      selectors: {
        "data-loading": isLoading,
        "aria-busy": isLoading,
      },
    });

    return (
      <>
        {isLoading && loadingMessage && (
          <ScreenReaderOnly id={loadingId}>{loadingMessage}</ScreenReaderOnly>
        )}
        <LoadingWrapper
          ref={ref}
          aria-describedby={isLoading ? loadingId : undefined}
          {...renderProps}
          {...rest}
        >
          <LoadingProvider
            isLoading={isLoading}
            buttonBehavior={buttonBehavior}
          >
            {renderProps.children}
          </LoadingProvider>
        </LoadingWrapper>
      </>
    );
  }
);

Loading.displayName = "Loading";
