# @atomicjolt/canvas-api-client

A TypeScript client for the Canvas LMS API.

## Development

To regenerate the API client from the OpenAPI spec:

```bash
npm run generate
```

## Usage

```typescript
import * as CanvasClient from "@atomicjolt/canvas-api-client";

CanvasClient.configureClient({
  baseUrl: "https://atomicjolt.instructure.com/api",
  token: "TOKEN",
});

CanvasClient.getSubAccountsOfAccount({
  path: {
    account_id: "1",
  },
})
  .then((response) => {
    console.log(response.data);
  })
  .catch(console.error);
```
