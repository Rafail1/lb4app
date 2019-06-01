import { SecuredType } from "../permission-key";
import { MyAuthenticationMetadata } from "../types";
import { MethodDecoratorFactory } from '@loopback/core';
import { AUTHENTICATION_METADATA_KEY } from "@loopback/authentication";
import { Class, Repository, Model } from '@loopback/repository';

export function secured(
    type: SecuredType = SecuredType.IS_AUTHENTICATED,
    roles: string[] = [],
    model?: Repository<Model> | undefined,
    id?: string | undefined
) {
    // we will use a custom interface. more on this below
    return MethodDecoratorFactory.createDecorator<MyAuthenticationMetadata>(AUTHENTICATION_METADATA_KEY, {
        type,
        roles: roles || [],
        model: model || undefined,
        id: id || '',
        options: undefined,
        strategy: "",
    });
}
