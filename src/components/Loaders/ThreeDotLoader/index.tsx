import React from "react";
import cn from "classnames";
import { HasClassName } from "../../../types";

export interface ThreeDotLoaderProps extends HasClassName {
  loading?: boolean;
}

/** Three Dot Loader Component */
export default function ThreeDotLoader(props: ThreeDotLoaderProps) {
  const { loading = true, className } = props;
  return (
    <div className={cn("aje-three-dot-loader", className)}>
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
