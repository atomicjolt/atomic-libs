import { forwardRef } from "react";
import {
  MaterialIconVariants,
  MaterialIcons,
  RenderBaseProps,
} from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Banner, BannerVariants } from "../Banner";

interface SharedProps extends RenderBaseProps<never> {
  /** Called when the user dismisses the banner */
  readonly onDismiss?: () => void;
}

export interface DismissableBannerProps extends SharedProps {
  readonly variant?: BannerVariants;
  /** Name of material icon to be displayed */
  readonly icon?: MaterialIcons;
  /** Variant of material icon to be displayed */
  readonly iconVariant?: MaterialIconVariants;
}

/** A Banner that the user can dismiss by clicking the "x" on the right.
 *
 * For convenience, there are also `ErrorBanner` and `WarningBanner` components that set sensible defaults
 * for the `variant` and `icon` props.
 */
export const DismissableBanner = forwardRef<
  HTMLDivElement,
  DismissableBannerProps
>((props, ref) => {
  const { variant = "info", iconVariant = "default", icon, onDismiss } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-banner",
    ...props,
  });

  return (
    <Banner {...renderProps} ref={ref}>
      {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
      <Banner.Content>{renderProps.children}</Banner.Content>
      <Banner.IconButton
        icon="close"
        className="aje-banner__dismiss"
        aria-label={`dismiss ${variant}`}
        onPress={() => {
          onDismiss?.();
        }}
      />
    </Banner>
  );
});

export type BannerWrapperProps = SharedProps;

/** Convenience Wrapper around `DismissableBanner` */
export const ErrorBanner = forwardRef<HTMLDivElement, BannerWrapperProps>(
  (props, ref) => {
    return (
      <DismissableBanner variant="error" icon="error" ref={ref} {...props} />
    );
  }
);

export const WarningBanner = forwardRef<HTMLDivElement, BannerWrapperProps>(
  (props, ref) => {
    return (
      <DismissableBanner
        variant="warning"
        icon="warning"
        ref={ref}
        {...props}
      />
    );
  }
);
