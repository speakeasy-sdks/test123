# User
(*.user*)

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

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.GetUserByNameSecurity](../../models/operations/getuserbynamesecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetUserByNameResponse](../../models/operations/getuserbynameresponse.md)>**


## updateUserJson

This can only be done by the logged in user.

### Example Usage

```typescript
import { FirstOne } from "firstOne";
import { UpdateUserJsonSecurity } from "firstOne/dist/sdk/models/operations";

(async() => {
  const sdk = new FirstOne();
const operationSecurity: UpdateUserJsonSecurity = {
  mainAuth: "",
};

  const res = await sdk.user.updateUserJson({
    user: {
      email: "john.smith@example.com",
      firstName: "John",
      lastName: "Smith",
      username: "John78",
    },
    username: "Alanna_Waters81",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateUserJsonRequest](../../models/operations/updateuserjsonrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateUserJsonSecurity](../../models/operations/updateuserjsonsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateUserJsonResponse](../../models/operations/updateuserjsonresponse.md)>**


## updateUserRaw

This can only be done by the logged in user.

### Example Usage

```typescript
import { FirstOne } from "firstOne";
import { UpdateUserRawSecurity } from "firstOne/dist/sdk/models/operations";

(async() => {
  const sdk = new FirstOne();
const operationSecurity: UpdateUserRawSecurity = {
  mainAuth: "",
};

  const res = await sdk.user.updateUserRaw({
    requestBody: new TextEncoder().encode("0xf4D36eFb83"),
    username: "Eleonore2",
  }, operationSecurity);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateUserRawRequest](../../models/operations/updateuserrawrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdateUserRawSecurity](../../models/operations/updateuserrawsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserRawResponse](../../models/operations/updateuserrawresponse.md)>**

