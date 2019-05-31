import {inject} from "@loopback/context";
import {AuthMetadataProvider} from "@loopback/authentication/dist/providers";
import {CoreBindings, Constructor} from "@loopback/core";
import {MetadataInspector} from "@loopback/metadata";
import {AUTHENTICATION_METADATA_KEY} from "@loopback/authentication";
import {MyAuthenticationMetadata} from "../types";

export class MyAuthMetadataProvider extends AuthMetadataProvider {
    constructor(
        @inject(CoreBindings.CONTROLLER_CLASS, {optional: true}) protected _controllerClass: Constructor<{}>,
        @inject(CoreBindings.CONTROLLER_METHOD_NAME, {optional: true}) protected _methodName: string,
    ) {
        super(_controllerClass, _methodName);
    }

    value(): MyAuthenticationMetadata | undefined {
        if (!this._controllerClass || !this._methodName) return;
        return MetadataInspector.getMethodMetadata<MyAuthenticationMetadata>(
            AUTHENTICATION_METADATA_KEY,
            this._controllerClass.prototype,
            this._methodName,
        );
    }
}
