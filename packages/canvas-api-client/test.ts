import * as CanvasClient from "./src";

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
