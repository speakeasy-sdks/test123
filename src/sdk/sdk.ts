/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Echo } from "./echo";
import { User } from "./user";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["http://example.com/api/v1", "https://example.com/api/v1"] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "1.0.0";
    sdkVersion = "1.5.0";
    genVersion = "2.88.2";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Example.com: This is an **example** API to demonstrate features of OpenAPI specification
 *
 * @remarks
 * # Introduction
 * This API definition is intended to to be a good starting point for describing your API in
 * [OpenAPI/Swagger format](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md).
 * It also demonstrates features of [create-openapi-repo](https://github.com/Redocly/create-openapi-repo) tool and
 * [Redoc](https://github.com/Redocly/Redoc) documentation engine. So beyond the standard OpenAPI syntax we use a few
 * [vendor extensions](https://github.com/Redocly/Redoc/blob/master/docs/redoc-vendor-extensions.md).
 *
 * # OpenAPI Specification
 * The goal of The OpenAPI Specification is to define a standard, language-agnostic interface to REST APIs which
 * allows both humans and computers to discover and understand the capabilities of the service without access to source
 * code, documentation, or through network traffic inspection. When properly defined via OpenAPI, a consumer can
 * understand and interact with the remote service with a minimal amount of implementation logic. Similar to what
 * interfaces have done for lower-level programming, OpenAPI removes the guesswork in calling the service.
 *
 *
 * @see {@link https://github.com/Rebilly/generator-openapi-repo} - Find out how to create a GitHub repo for your OpenAPI definition.
 */
export class FirstOne {
    /**
     * Example echo operations
     */
    public echo: Echo;
    /**
     * Operations about user
     */
    public user: User;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        const securityClient = defaultClient;

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.echo = new Echo(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
    }
}
