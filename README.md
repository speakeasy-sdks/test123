# firstOne

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/test123
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/test123
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Echo](docs/sdks/echo/README.md)

* [echo](docs/sdks/echo/README.md#echo) - Echo test

### [User](docs/sdks/user/README.md)

* [getUserByName](docs/sdks/user/README.md#getuserbyname) - Get user by user name
* [updateUserJson](docs/sdks/user/README.md#updateuserjson) - Updated user
* [updateUserRaw](docs/sdks/user/README.md#updateuserraw) - Updated user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
