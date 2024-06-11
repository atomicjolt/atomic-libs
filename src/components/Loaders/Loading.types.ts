import { Size } from "@/types";

export type LoaderPlacement = "inline" | "block" | "center" | "absolute center";

export interface LoaderProps {
  isLoading?: boolean;
  message?: React.ReactNode;
  size?: Size;
  placement?: LoaderPlacement;
}

export interface ErrorStateProps {
  error: React.ReactNode;
}
