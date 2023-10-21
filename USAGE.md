<!-- Start SDK Example Usage -->


```typescript
import { FirstOne } from "firstOne";
import { EchoSecurity } from "firstOne/dist/sdk/models/operations";

(async () => {
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
<!-- End SDK Example Usage -->