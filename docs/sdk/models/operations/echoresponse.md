# EchoResponse


## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `twoHundredApplicationJsonString`                       | *string*                                                | :heavy_minus_sign:                                      | OK                                                      |
| `twoHundredApplicationXmlRes`                           | *string*                                                | :heavy_minus_sign:                                      | OK                                                      |
| `twoHundredTextCsvRes`                                  | *string*                                                | :heavy_minus_sign:                                      | OK                                                      |
| `contentType`                                           | *string*                                                | :heavy_check_mark:                                      | HTTP response content type for this operation           |
| `headers`                                               | Record<string, *string*[]>                              | :heavy_check_mark:                                      | N/A                                                     |
| `statusCode`                                            | *number*                                                | :heavy_check_mark:                                      | HTTP response status code for this operation            |
| `rawResponse`                                           | [AxiosResponse](https://axios-http.com/docs/res_schema) | :heavy_check_mark:                                      | Raw HTTP response; suitable for custom response parsing |