# Atomic Hooks

A Set of React Hooks for Atomic Jolt

## Installation

```
npm install --save @atomicjolt/hooks
```

```
yarn add @atomicjolt/hooks
```

## Documentation

[Docs can be found here](https://atomicjolt.github.io/react-hooks/)

## Usage

```js
import { useBool } from '@atomicjolt/hooks';

const Component = () => {
  const [bool, toggle] = useBool(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <p>Bool is {bool}</p>
    </div>
  );
};
```
