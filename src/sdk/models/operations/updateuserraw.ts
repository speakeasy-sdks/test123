/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class UpdateUserRawSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2;name=Authorization" })
    mainAuth: string;
}

export class UpdateUserRawRequest extends SpeakeasyBase {
    /**
     * Updated user object
     */
    @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
    requestBody: Uint8Array;

    /**
     * Pretty print response
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pretty_print" })
    prettyPrint?: boolean;

    /**
     * The name that needs to be updated
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
    username: string;
}

export class UpdateUserRawResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
