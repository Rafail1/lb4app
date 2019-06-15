import { SecuredType } from "./permission-key";
import { AuthenticationMetadata } from "@loopback/authentication";
import { Repository, Model } from "@loopback/repository";
export interface Credentials {
    hash: string;
    id: string;
}
export interface MyAuthenticationMetadata extends AuthenticationMetadata {
    type: SecuredType;
    roles: string[];
    model: Repository<Model> | undefined;
    id: string | undefined;
}
