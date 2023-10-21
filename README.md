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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [echo](docs/sdks/echo/README.md)

* [echo](docs/sdks/echo/README.md#echo) - Echo test

### [user](docs/sdks/user/README.md)

* [getUserByName](docs/sdks/user/README.md#getuserbyname) - Get user by user name
* [updateUserJson](docs/sdks/user/README.md#updateuserjson) - Updated user
* [updateUserRaw](docs/sdks/user/README.md#updateuserraw) - Updated user
<!-- End SDK Available Operations -->



<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
