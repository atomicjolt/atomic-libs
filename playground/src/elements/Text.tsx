import React from "react";
import {
  Em,
  Heading,
  Link,
  MaterialIcon,
  Strong,
  Text as AtomicText,
} from "@atomicjolt/atomic-elements";
import { Demo, DemoPage } from "../components/Demo";

const SAMPLE = "The quick brown fox jumps over the lazy dog.";
const TEXT_SIZES = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
const HEADINGS = [
  ["h1", "9"],
  ["h2", "8"],
  ["h3", "7"],
  ["h4", "6"],
  ["h5", "5"],
  ["h6", "4"],
] as const;
const ICONS = [
  "home",
  "search",
  "settings",
  "delete",
  "check_circle",
  "info",
  "warning",
  "error",
] as const;

export default function Text() {
  return (
    <DemoPage>
      <Demo title="Text sizes" description={<code>{"<Text $size>"}</code>}>
        {TEXT_SIZES.map((size) => (
          <AtomicText key={size} $size={size}>
            {size} — {SAMPLE}
          </AtomicText>
        ))}
      </Demo>

      <Demo title="Headings" description={<code>{"<Heading as $size>"}</code>}>
        {HEADINGS.map(([as, size]) => (
          <Heading key={as} as={as} $size={size}>
            {as} — {SAMPLE}
          </Heading>
        ))}
      </Demo>

      <Demo title="Inline">
        <AtomicText $size="4">
          Text can be <Strong>strong</Strong>, <Em>emphasised</Em>, or contain{" "}
          <Link href="https://www.atomicjolt.com">a link</Link>.
        </AtomicText>
      </Demo>

      <Demo title="Icons" description={<code>{"<MaterialIcon icon>"}</code>}>
        <div className="pg-row">
          {ICONS.map((icon) => (
            <MaterialIcon key={icon} icon={icon} />
          ))}
        </div>
      </Demo>
    </DemoPage>
  );
}
