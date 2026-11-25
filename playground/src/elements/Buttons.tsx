import React, { useState } from "react";
import { Button, ButtonGroup, IconButton } from "@atomicjolt/atomic-elements";
import { Demo, DemoPage } from "../components/Demo";

const VARIANTS = [
  "primary",
  "secondary",
  "success",
  "error",
  "inverted",
  "content",
  "border",
  "ghost",
  "link",
] as const;
const SIZES = ["small", "medium", "large"] as const;

export default function Buttons() {
  const [count, setCount] = useState(0);

  return (
    <DemoPage>
      <Demo title="Variants">
        <div className="pg-row">
          {VARIANTS.map((variant) =>
            variant === "inverted" ? (
              // Inverted is for dark backgrounds.
              <span key={variant} className="pg-inverted">
                <Button variant={variant}>{variant}</Button>
              </span>
            ) : (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ),
          )}
        </div>
      </Demo>

      <Demo title="Sizes">
        <div className="pg-row">
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </div>
      </Demo>

      <Demo title="States">
        <div className="pg-row">
          <Button onPress={() => setCount((c) => c + 1)}>Pressed {count} times</Button>
          <Button isDisabled>Disabled</Button>
          <Button isLoading>Loading</Button>
        </div>
      </Demo>

      <Demo title="IconButton">
        <div className="pg-row">
          {VARIANTS.filter((v) => v !== "link").map((variant) => (
            <IconButton key={variant} icon="more_vert" aria-label={variant} variant={variant} />
          ))}
          <IconButton icon="more_vert" aria-label="Loading" isLoading />
        </div>
      </Demo>

      <Demo title="ButtonGroup">
        <ButtonGroup $gap="2">
          <Button variant="secondary">Cancel</Button>
          <Button>Save</Button>
        </ButtonGroup>
      </Demo>
    </DemoPage>
  );
}
