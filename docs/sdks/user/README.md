# User
(*user*)

## Overview

Operations about user

### Available Operations

* [getUserByName](#getuserbyname) - Get user by user name
* [updateUserJson](#updateuserjson) - Updated user
* [updateUserRaw](#updateuserraw) - Updated user

## getUserByName

Some description of the operation. 
You can use `markdown` here.


### Example Usage

```typescript
import { FirstOne } from "firstOne";
import { GetUserByNameSecurity } from "firstOne/dist/sdk/models/operations";

(async() => {
  const sdk = new FirstOne();
const operationSecurity: GetUserByNameSecurity = {
  apiKey: "",
};

  const res = await sdk.user.getUserByName({
    username: "Zachery_Schneider",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetUserByNameRequest](../../sdk/models/operations/getuserbynamerequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetUserByNameSecurity](../../sdk/models/operations/getuserbynamesecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetUserByNameResponse](../../sdk/models/operations/getuserbynameresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { FirstOne } from "firstOne";

(async() => {
  const sdk = new FirstOne({
    security: {
      mainAuth: "",
    },
  });

  const res = await sdk.user.updateUserJson({
    user: {
      email: "john.smith@example.com",
      firstName: "John",
      lastName: "Smith",
      username: "John78",
    },
    username: "Alanna_Waters81",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateUserJsonRequest](../../sdk/models/operations/updateuserjsonrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateUserJsonResponse](../../sdk/models/operations/updateuserjsonresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { FirstOne } from "firstOne";

(async() => {
  const sdk = new FirstOne({
    security: {
      mainAuth: "",
    },
  });

  const res = await sdk.user.updateUserRaw({
    requestBody: new TextEncoder().encode("0xf4D36eFb83"),
    username: "Eleonore2",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateUserRawRequest](../../sdk/models/operations/updateuserrawrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateUserRawResponse](../../sdk/models/operations/updateuserrawresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
