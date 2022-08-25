# Atomic Elements

Atomic Elements is a React component library

## Storybook
Atomic Element uses storybook for development / documentation. [Access here](LINK-STUB)


## Quickstart

```
$ npm install --save atomic-elements
```

```
$ yarn add atomic-elements
```

Import these stylesheets at the root of your app
```js
import "atomic-elements/dist/styles.css";
import "atomic-elements/dist/fonts.css";
import "atomic-elements/dist/variables.css";
```

Then, start using components

```js
import React from 'react';
import { Button } from 'atomic-elements';

export default function ExampleComponent() {
  return (
    <Button>Click Me!</Button>
  )
}

```