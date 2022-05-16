import React from "react";
import "../../general.scss";
import "./styles.scss";

export interface Props {
  loading?: boolean;
}

/** Three Dot Loader Component */
export default function ThreeDotLoader({ loading = true }: Props) {
  return (
    <div className="aj-three-dot-loader">
      {loading ? (
        <div className="dots-container">
          <span className="dot1"></span>
          <span className="dot2"></span>
          <span className="dot3"></span>
        </div>
      ) : (
        <i />
      )}
    </div>
  );
}
