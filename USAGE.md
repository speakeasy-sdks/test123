<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->