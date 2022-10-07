import React from "react";
import cn from "classnames";
import { HasClassName } from "../../../types";

export interface SpinnerProps extends HasClassName {
  loading?: boolean;
}

/** Spinner Component */
export default function Spinner(props: SpinnerProps) {
  const { loading = true, className } = props;

  return (
    <div className={cn("aje-spinner", className)}>
      {loading ? (
        <svg
          className="circular-loader"
          viewBox="25 25 50 50"
          data-testid="spinner-svg"
        >
          <circle
            className="loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
          ></circle>
        </svg>
      ) : (
        <span />
      )}
    </div>
  );
}
