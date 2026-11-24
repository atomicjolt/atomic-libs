/**
 * Sets a component's `displayName`.
 *
 * Use this instead of `Component.displayName = "Name"` in any file that
 * declares more than one component (compound components such as
 * `Card.Header`, or several exported components).
 *
 * Why: react-docgen-typescript, which builds our Storybook docs, takes the
 * first top-level `X.displayName = "literal"` statement in a file and applies
 * it to every component in that file, whatever `X` is. With several
 * assignments, components get each other's names (e.g. `Card` documented as
 * `Card.Header`) and some lose their docs entirely. Assigning through this
 * function keeps the runtime name without confusing docgen, which then names
 * components from their exports instead.
 */
export function setDisplayName<T extends object>(component: T, name: string): T {
  (component as { displayName?: string }).displayName = name;
  return component;
}
