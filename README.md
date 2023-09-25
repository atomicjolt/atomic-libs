# Atomic Elements

Atomic Elements is a React component library

## Storybook

Atomic Element uses storybook for development / documentation. [Access here](https://atomicjolt.github.io/atomic-elements/)

## Quickstart

```
$ npm install --save @atomicjolt/atomic-elements
```

```
$ yarn add @atomicjolt/atomic-elements
```

Import these stylesheets at the root of your app

```js
import "@atomicjolt/atomic-elements/dist/fonts.css";
import "@atomicjolt/atomic-elements/dist/variables.css";
import "@atomicjolt/atomic-elements/dist/globals.css";
```

Then, start using components

```js
import React from "react";
import { Button } from "@atomicjolt/atomic-elements";

export default function ExampleComponent() {
  return <Button>Click Me!</Button>;
}
```
