import {SecuredType} from "./permission-key";
import {AuthenticationMetadata} from "@loopback/authentication";

export interface Credentials {
    hash:string
}
export interface MyAuthenticationMetadata extends AuthenticationMetadata {
    type: SecuredType;
    roles: string[];
}