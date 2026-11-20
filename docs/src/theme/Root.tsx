import React from "react";
import { ElementsProvider } from "@atomicjolt/atomic-elements";

/** Wraps the whole docs site in a single ElementsProvider (one per page). */
export default function Root({ children }: { children: React.ReactNode }) {
  return <ElementsProvider>{children}</ElementsProvider>;
}
