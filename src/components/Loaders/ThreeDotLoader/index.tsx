import React from "react";
import cn from "classnames";
import { HasClassName } from "../../../types";
import {
  Dot1,
  Dot2,
  Dot3,
  DotsContainer,
  ThreeDotLoaderWrapper,
} from "./ThreeDotLoader.styles";
import { LoaderCheck } from "../Loader.styles";

export interface ThreeDotLoaderProps extends HasClassName {
  isLoading?: boolean;
}

/** Three Dot Loader Component */
export default function ThreeDotLoader(props: ThreeDotLoaderProps) {
  const { isLoading = true, className } = props;
  return (
    <ThreeDotLoaderWrapper className={cn("aje-three-dot-loader", className)}>
      {isLoading ? (
        <DotsContainer className="dots-container">
          <Dot1 className="dot1"></Dot1>
          <Dot2 className="dot2"></Dot2>
          <Dot3 className="dot3"></Dot3>
        </DotsContainer>
      ) : (
        <LoaderCheck />
      )}
    </ThreeDotLoaderWrapper>
  );
}
