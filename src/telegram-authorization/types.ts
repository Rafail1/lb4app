import {SecuredType} from "./permission-key";
import {AuthenticationMetadata} from "@loopback/authentication";
import {Persistable} from "@loopback/repository";

export interface Credentials {
    hash:string
    id:string
}
export interface MyAuthenticationMetadata extends AuthenticationMetadata {
    type: SecuredType;
    roles: string[];
    model?: Persistable;
}