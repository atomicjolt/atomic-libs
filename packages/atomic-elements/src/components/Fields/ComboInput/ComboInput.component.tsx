import React from "react";
import styled from "styled-components";
import mixins from "@styles/mixins";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ComboInputContext } from "./ComboInput.context";
import { ComboInputProps } from "./ComboInput.types";
import { StyledComboInput } from "./ComboInput.styles";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";
import { useLoading } from "@components/Feedback/Loading";

const StyledLoadingComboInput = styled(SkeletonLoader)`
  ${mixins.SizingX}
  height: var(--input-height);
  display: block;
`;

/**
 * ComboInput is a wrapper component designed to provide an input-like interface
 * that focuses the actual input element when clicked. It is ideal for building
 * custom input components that are not standard input elements, or inputs that
 * incorporate additional elements such as icons or buttons.
 */
export const ComboInput = React.forwardRef(function ComboInput(
  props: ComboInputProps,
  ref: React.Ref<HTMLDivElement>
) {
  [props, ref] = useContextProps(ComboInputContext, props, ref);

  const { isLoading, loadingLabel } = useLoading(props);
  const {
    className,
    style,
    padding,
    children,
    inputRef,
    isLoading: _isLoading,
    loadingLabel: _loadingLabel,
    ...rest
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-combo-input",
    className,
    style,
    children,
    ...rest,
  });

  if (isLoading) {
    return (
      <StyledLoadingComboInput
        className={renderProps.className}
        style={renderProps.style}
        title={loadingLabel}
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="var(--input-border-radius)"
          ry="var(--input-border-radius)"
        />
      </StyledLoadingComboInput>
    );
  }

  return (
    <StyledComboInput
      ref={ref}
      onClick={() => inputRef?.current?.focus()}
      $paddingSide={padding}
      {...rest}
      {...renderProps}
    >
      {renderProps.children}
    </StyledComboInput>
  );
});
