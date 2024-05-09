import React from "react";

/** Clones a data-storage component from react-stately
 * While keeping the same static properties
 */
export function cloneComponent<T extends Function>(
  component: T,
  displayName: string
): T {
  // The return type doesn't matter because this
  // component is never actually what gets rendered
  const ClonedComponent: any = (props: any) => {
    return <></>;
  };

  ClonedComponent.displayName = displayName;

  // React Stately binds some static properties to their
  // data structures, so we need to copy them over to the
  // new component
  copyStaticProperties(component, ClonedComponent);

  return ClonedComponent;
}

export function copyStaticProperties(component: any, newComponent: any): void {
  for (const key in component) {
    newComponent[key] = component[key];
  }
}
