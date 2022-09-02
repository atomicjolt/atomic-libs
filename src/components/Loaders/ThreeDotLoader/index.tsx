import React from "react";

export interface ThreeDotLoaderProps {
  loading?: boolean;
}

/** Three Dot Loader Component */
export default function ThreeDotLoader({
  loading = true,
}: ThreeDotLoaderProps) {
  return (
    <div className="aje-three-dot-loader">
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
