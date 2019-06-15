import { AuthMetadataProvider } from "@loopback/authentication/dist/providers";
import { Constructor } from "@loopback/core";
import { MyAuthenticationMetadata } from "../types";
export declare class MyAuthMetadataProvider extends AuthMetadataProvider {
    protected _controllerClass: Constructor<{}>;
    protected _methodName: string;
    constructor(_controllerClass: Constructor<{}>, _methodName: string);
    value(): MyAuthenticationMetadata | undefined;
}
