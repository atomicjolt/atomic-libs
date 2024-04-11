import React from "react";
import { ErrorHelper, Link } from "./DevelopmentErrorModal.styles";

interface ErrorMatcher {
  match: (errorMessage: string) => boolean;
  render: () => React.ReactNode;
}

function regexMatcher(
  regex: RegExp,
  render: () => React.ReactNode
): ErrorMatcher {
  return {
    match: (errorMessage: string) => regex.test(errorMessage),
    render,
  };
}

export const errorMatchers: ErrorMatcher[] = [
  regexMatcher(
    /(Unknown element <?.+> in collection)|(type\.getCollectionNode is not a function)/,
    () => (
      <ErrorHelper>
        This probably means that you are trying to render a collection item in a
        subcomponent or you are trying to render a non collection item in a
        collection component.{" "}
        <Link
          href="https://atomicjolt.github.io/atomic-elements/next/?path=/docs/usage-collection-components--overview#rendering-items-in-subcomponents"
          target="_blank"
        >
          Check here for more information
        </Link>
      </ErrorHelper>
    )
  ),
];
