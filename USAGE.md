<!-- Start SDK Example Usage -->


```typescript
import { FirstOne } from "firstOne";
import { EchoResponse, EchoSecurity } from "firstOne/dist/sdk/models/operations";

const sdk = new FirstOne();
const operationSecurity: EchoSecurity = {
  apiKey: "",
};

sdk.echo.echo("Hello world!", operationSecurity).then((res: EchoResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->