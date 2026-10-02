import React, { forwardRef } from "react";
import styled from "styled-components";
import { filterDOMProps } from "@react-aria/utils";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps, LoadingProps } from "../../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { InputContext } from "./Input.context";
import { SlotProps } from "@hooks/useSlottedContext";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";
import { useLoading } from "@components/Feedback/Loading";

const StyledInput = styled.input`
  ${mixins.Regular}
  ${mixins.InputLike}
  ${mixins.SizingX}
`;

const StyledLoadingInput = styled(SkeletonLoader)`
  ${mixins.SizingX}
  height: var(--input-height);
  display: block;
`;

export interface InputProps
  extends Omit<
      ElementWrapperProps<React.InputHTMLAttributes<HTMLInputElement>>,
      "slot"
    >,
    SlotProps,
    LoadingProps {}

/** The input element for a field. */
export const Input = forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  [props, ref] = useContextProps(InputContext, props, ref);

  const { isLoading, loadingLabel } = useLoading(props);
  const {
    className,
    size,
    style,
    isLoading: _isLoading,
    loadingLabel: _loadingLabel,
    ...rest
  } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
    style,
  });

  if (isLoading) {
    return (
      <StyledLoadingInput
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
      </StyledLoadingInput>
    );
  }

  return (
    <StyledInput
      ref={ref}
      {...renderProps}
      {...rest}
      slot={rest.slot || undefined}
    />
  );
});
