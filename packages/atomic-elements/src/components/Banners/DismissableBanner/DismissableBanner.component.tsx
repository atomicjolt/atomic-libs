import { forwardRef } from "react";
import {
  ElementWrapper,
  MaterialIconVariants,
  MaterialIcons,
  RenderBaseProps,
} from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Banner, BannerVariants } from "../Banner";
import { useTranslations } from "@hooks/useTranslations";

interface SharedProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {
  /** Callback for when the user clicks the "dismiss" button.
   * When it's not present the button will not be rendered */
  readonly onDismiss?: () => void;
}

export interface DismissableBannerProps extends SharedProps {
  readonly variant?: BannerVariants;
  /** Name of material icon to be displayed */
  readonly icon?: MaterialIcons;
  /** Variant of material icon to be displayed */
  readonly iconVariant?: MaterialIconVariants;
}

/**
 * A dismissable banner component that displays information with options
 * for variant styling, icons, and optional dismissal functionality.
 */
export const DismissableBanner = forwardRef<
  HTMLDivElement,
  DismissableBannerProps
>((props, ref) => {
  const {
    variant = "info",
    iconVariant = "default",
    icon,
    onDismiss,
    children,
    ...rest
  } = props;

  const t = useTranslations();

  const renderProps = useRenderProps({
    componentClassName: "aje-banner",
    children,
  });

  return (
    <Banner ref={ref} variant={variant} {...rest}>
      {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
      <Banner.Content>{renderProps.children}</Banner.Content>
      {onDismiss && (
        <Banner.IconButton
          icon="close"
          className="aje-banner__dismiss"
          aria-label={t("dismiss")}
          onPress={onDismiss}
        />
      )}
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
