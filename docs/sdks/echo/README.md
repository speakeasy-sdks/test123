# Echo
(*echo*)

## Overview

Example echo operations

### Available Operations

* [echo](#echo) - Echo test

## echo

Receive the exact message you've sent

### Example Usage

```typescript
import { FirstOne } from "firstOne";
import { EchoSecurity } from "firstOne/dist/sdk/models/operations";

async function run() {
  const sdk = new FirstOne();
const operationSecurity: EchoSecurity = {
  apiKey: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.echo.echo("Hello world!", operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `request`                                                              | [string](../../models/.md)                                             | :heavy_check_mark:                                                     | The request object to use for the request.                             |
| `security`                                                             | [operations.EchoSecurity](../../sdk/models/operations/echosecurity.md) | :heavy_check_mark:                                                     | The security requirements to use for the request.                      |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.EchoResponse](../../sdk/models/operations/echoresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
