import { SecuredType } from "../permission-key";
import { MyAuthenticationMetadata } from "../types";
import { MethodDecoratorFactory } from '@loopback/core';
import { AUTHENTICATION_METADATA_KEY } from "@loopback/authentication";

export function secured(
    type: SecuredType = SecuredType.IS_AUTHENTICATED,
    roles: string[] = [],
) {
    return MethodDecoratorFactory.createDecorator<MyAuthenticationMetadata>(AUTHENTICATION_METADATA_KEY, {
        type,
        roles: roles || [],
        options: undefined,
        strategy: "",
    });
}
