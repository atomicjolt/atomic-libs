# Atomic Elements

Atomic Elements is a React component library

## Storybook

Atomic Element uses storybook for development / documentation. [Access here](https://atomicjolt.github.io/atomic-elements/)

To run the Atomic Elements storybook itself
```
$ yarn storybook:dev
```

To spin up a React playground to test components
```
$ yarn playground
```

## Quickstart

```
$ npm install --save @atomicjolt/atomic-elements
```

```
$ yarn add @atomicjolt/atomic-elements
```

Include the following in your project

```js
import { ElementsProvider } from "@atomicjolt/atomic-elements";

const App = () => (
  <ElementsProvider>
    <YourApp />
  </ElementsProvider>
);
```

Then, start using components

```js
import React from "react";
import { Button } from "@atomicjolt/atomic-elements";

export default function ExampleComponent() {
  return <Button>Click Me!</Button>;
}
```
