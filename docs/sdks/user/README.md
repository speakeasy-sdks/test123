# User

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
import { GetUserByNameResponse, GetUserByNameSecurity } from "firstOne/dist/sdk/models/operations";

const sdk = new FirstOne();
const operationSecurity: GetUserByNameSecurity = {
  apiKey: "",
};

sdk.user.getUserByName({
  prettyPrint: false,
  username: "Katharina_Medhurst60",
  withEmail: false,
}, operationSecurity).then((res: GetUserByNameResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateUserJsonResponse, UpdateUserJsonSecurity } from "firstOne/dist/sdk/models/operations";

const sdk = new FirstOne();
const operationSecurity: UpdateUserJsonSecurity = {
  mainAuth: "",
};

sdk.user.updateUserJson({
  user: {
    email: "john.smith@example.com",
    firstName: "John",
    lastName: "Smith",
    username: "John78",
  },
  prettyPrint: false,
  username: "Ryan.Little62",
}, operationSecurity).then((res: UpdateUserJsonResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
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
import { UpdateUserRawResponse, UpdateUserRawSecurity } from "firstOne/dist/sdk/models/operations";

const sdk = new FirstOne();
const operationSecurity: UpdateUserRawSecurity = {
  mainAuth: "",
};

sdk.user.updateUserRaw({
  requestBody: "deserunt".encode(),
  prettyPrint: false,
  username: "Gerda89",
}, operationSecurity).then((res: UpdateUserRawResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateUserRawRequest](../../models/operations/updateuserrawrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.UpdateUserRawSecurity](../../models/operations/updateuserrawsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateUserRawResponse](../../models/operations/updateuserrawresponse.md)>**

