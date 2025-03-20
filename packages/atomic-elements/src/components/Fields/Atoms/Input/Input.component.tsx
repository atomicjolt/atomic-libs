import React, { forwardRef } from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { InputContext } from "./Input.context";
import { SlotProps } from "@hooks/useSlottedContext";
import { useLoading } from "@components/Feedback/Loading";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";

const StyledInput = styled.input`
  ${mixins.Regular}
  ${mixins.InputLike}
  ${mixins.SizingX}
`;

const LoadingWrapper = styled.div`
  border-radius: var(--input-border-radius);
  height: var(--input-height);
  overflow: hidden;
`;

export interface InputProps
  extends Omit<
      ElementWrapperProps<React.InputHTMLAttributes<HTMLInputElement>>,
      "slot"
    >,
    SlotProps {}

/** A wrapped `<input type="text" />` element */
export const Input = forwardRef(function Input(
  props: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  [props, ref] = useContextProps(InputContext, props, ref);

  const { className, size, style, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
    style,
  });

  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <LoadingWrapper>
          <SkeletonLoader height="100%" width="100%">
            <rect x="0" y="0" width="100%" height="100%" />
          </SkeletonLoader>
        </LoadingWrapper>
      )}
      <StyledInput
        ref={ref}
        {...renderProps}
        {...rest}
        slot={rest.slot || undefined}
        style={{
          display: isLoading ? "none" : "initial",
          ...renderProps.style,
        }}
      />
    </>
  );
});
