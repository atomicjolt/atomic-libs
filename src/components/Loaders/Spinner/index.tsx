import React from "react";
import cn from "classnames";
import { HasClassName } from "../../../types";
import { CircularLoader, LoaderPath, SpinnerContainer } from "./Spinner.styles";
import { LoaderCheck } from "../Loader.styles";

export interface SpinnerProps extends HasClassName {
  loading?: boolean;
}

/** Spinner Component */
export default function Spinner(props: SpinnerProps) {
  const { loading = true, className } = props;

  return (
    <SpinnerContainer className={cn("aje-spinner", className)}>
      {loading ? (
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
          />
        </CircularLoader>
      ) : (
        <LoaderCheck />
      )}
    </SpinnerContainer>
  );
}
