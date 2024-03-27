import React from "react";
import cn from "classnames";
import { BaseProps, Size } from "../../../types";
import { Dot1, Dot2, Dot3, DotsContainer } from "./ThreeDotLoader.styles";
import { LoaderCheck, LoaderWrapper } from "../Loader.styles";

export interface ThreeDotLoaderProps extends Omit<BaseProps, "size"> {
  isLoading?: boolean;
  size?: Size;
  isCentered?: boolean;
}

/** Three Dot Loader Component */
export default function ThreeDotLoader(props: ThreeDotLoaderProps) {
  const {
    isLoading = true,
    className,
    size = "medium",
    isCentered = false,
    ...rest
  } = props;
  return (
    <LoaderWrapper
      className={cn("aje-three-dot-loader", `is-${size}`, className, {
        "is-centered": isCentered,
      })}
      {...rest}
    >
      {isLoading ? (
        <DotsContainer className="dots-container">
          <Dot1 className="dot1"></Dot1>
          <Dot2 className="dot2"></Dot2>
          <Dot3 className="dot3"></Dot3>
        </DotsContainer>
      ) : (
        <LoaderCheck />
      )}
    </LoaderWrapper>
  );
}
