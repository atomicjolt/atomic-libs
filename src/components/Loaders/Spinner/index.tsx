import React from "react";
export interface Props {
  loading?: boolean;
}

/** Spinner Component */
export default function Spinner({ loading = true }: Props) {
  return (
    <div className="aj-spinner">
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
