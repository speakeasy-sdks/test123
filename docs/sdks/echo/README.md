# Echo
(*.echo*)

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

(async() => {
  const sdk = new FirstOne();
const operationSecurity: EchoSecurity = {
  apiKey: "",
};

  const res = await sdk.echo.echo("Hello world!", operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                          | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `request`                                                          | [string](../../models//.md)                                        | :heavy_check_mark:                                                 | The request object to use for the request.                         |
| `security`                                                         | [operations.EchoSecurity](../../models/operations/echosecurity.md) | :heavy_check_mark:                                                 | The security requirements to use for the request.                  |
| `config`                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)       | :heavy_minus_sign:                                                 | Available config options for making requests.                      |


### Response

**Promise<[operations.EchoResponse](../../models/operations/echoresponse.md)>**

