We use npm for our Node dependencies. So when talking about packages, use the correct package manager.

We always write TypeScript, not JavaScript. Always generate TS code when prompted for client code.

We use vitest for client-side tests. The test files live next to the TS file they are testing with a name of <filename>.spec.<extension>. When testing a react component, the tests should always include at least 1 snapshot test. When writing tests, functions like `describe` and `it` should be imported from `vitest`.

Our TS code follows these style guidelines:
- Single quotes for strings, double quotes for strings in JSX attributes
- Always include trailing commas
- Use a tabwidth of 2
- Always include semicolons
- Never use default exports
- Always use `const` for variables that are not reassigned
- Always use `let` for variables that are reassigned
- Always use `===` and `!==` for comparisons never `==` or `!=`
When you respond with TS code, please follow these conventions

When writing React components:
- The component should always be a functional component using function declaration syntax
- If the component has props, the props should always be typed using an interface
- If the component has props the type should be named after the component with a `Props` suffix
- `props` should always be the first argument of the function
- The first line of the function should be `const { prop1, prop2 } = props;` to destructure the props
