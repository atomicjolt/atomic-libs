import React, { useState } from "react";
import {
  ActionBanner,
  Banner,
  Button,
  DismissableBanner,
  ErrorBanner,
  WarningBanner,
} from "@atomicjolt/atomic-elements";
import { Demo, DemoPage } from "../components/Demo";

const VARIANTS = ["info", "success", "warning", "error"] as const;
const ICONS = { info: "info", success: "check_circle", warning: "warning", error: "error" } as const;

export default function Banners() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <DemoPage>
      <Demo title="Banner">
        {VARIANTS.map((variant) => (
          <Banner key={variant} variant={variant}>
            <Banner.Icon icon={ICONS[variant]} />
            <Banner.Content>Variant: {variant}</Banner.Content>
            <Banner.IconButton icon="close" aria-label="Close" />
          </Banner>
        ))}
      </Demo>

      <Demo title="ActionBanner">
        <ActionBanner
          variant="info"
          icon="info"
          buttonText="Go to post"
          onPress={() => alert("Action")}
        >
          Article posted! Now wait for the comments to roll in.
        </ActionBanner>
      </Demo>

      <Demo title="DismissableBanner">
        {dismissed ? (
          <Button variant="secondary" onPress={() => setDismissed(false)}>
            Show again
          </Button>
        ) : (
          <DismissableBanner variant="success" icon="check_circle" onDismiss={() => setDismissed(true)}>
            Notification settings saved
          </DismissableBanner>
        )}
      </Demo>

      <Demo title="ErrorBanner / WarningBanner">
        <ErrorBanner>Something went wrong</ErrorBanner>
        <WarningBanner>Heads up: this can't be undone</WarningBanner>
      </Demo>
    </DemoPage>
  );
}
