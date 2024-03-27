import React from "react";
import cn from "classnames";
import { BaseProps, Size } from "../../../types";
import { CircularLoader, LoaderPath } from "./Spinner.styles";
import { LoaderCheck, LoaderWrapper } from "../Loader.styles";

export interface SpinnerProps extends Omit<BaseProps, "size"> {
  isLoading?: boolean;
  isCentered: boolean;
  size?: Size;
}

const strokeWidths: Record<Size, number> = {
  small: 1,
  medium: 0.5,
  large: 0.3,
};

/** Spinner Component */
export default function Spinner(props: SpinnerProps) {
  const {
    isLoading = true,
    className,
    size = "medium",
    isCentered = false,
    ...rest
  } = props;

  const strokeWidth = strokeWidths[size];

  return (
    <LoaderWrapper
      className={cn("aje-spinner", `is-${size}`, className, {
        "is-centered": isCentered,
      })}
      {...rest}
    >
      {isLoading ? (
        <CircularLoader
          className="circular-loader"
          viewBox="25 25 50 50"
          data-testid="spinner-svg"
        >
          <LoaderPath
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth={`${strokeWidth}em`}
          />
        </CircularLoader>
      ) : (
        <LoaderCheck />
      )}
    </LoaderWrapper>
  );
}
