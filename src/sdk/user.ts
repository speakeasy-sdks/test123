/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Operations about user
 */

export class User {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get user by user name
     *
     * @remarks
     * Some description of the operation.
     * You can use `markdown` here.
     *
     */
    async getUserByName(
        req: operations.GetUserByNameRequest,
        security: operations.GetUserByNameSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetUserByNameResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetUserByNameRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/users/{username}", req);
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetUserByNameSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        headers["Accept"] = "application/json";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetUserByNameResponse = new operations.GetUserByNameResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.user = utils.objectToClass(JSON.parse(decodedRes), shared.User);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 403 ||
                httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }

    /**
     * Updated user
     *
     * @remarks
     * This can only be done by the logged in user.
     */
    async updateUserJson(
        req: operations.UpdateUserJsonRequest,
        security: operations.UpdateUserJsonSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateUserJsonResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateUserJsonRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/users/{username}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "user", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateUserJsonSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "*/*";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateUserJsonResponse = new operations.UpdateUserJsonResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
            case httpRes?.status == 400 ||
                httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    httpRes?.data,
                    httpRes
                );
        }

        return res;
    }

    /**
     * Updated user
     *
     * @remarks
     * This can only be done by the logged in user.
     */
    async updateUserRaw(
        req: operations.UpdateUserRawRequest,
        security: operations.UpdateUserRawSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.UpdateUserRawResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateUserRawRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/users/{username}", req);

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "requestBody", "raw");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.UpdateUserRawSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers = { ...reqBodyHeaders, ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req);
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "*/*";

        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url + queryParams,
            method: "put",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpdateUserRawResponse = new operations.UpdateUserRawResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
            case httpRes?.status == 400 ||
                httpRes?.status == 404 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    httpRes?.data,
                    httpRes
                );
        }

        return res;
    }
}
