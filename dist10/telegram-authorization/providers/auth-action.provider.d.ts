/// <reference types="express" />
import { BindingKey, Getter, Provider, Setter } from "@loopback/context";
import { AuthenticateFn, UserProfile } from "@loopback/authentication";
import { Strategy } from "passport";
import { Request } from "@loopback/rest";
import { MyAuthenticationMetadata } from "../types";
export declare namespace MyAuthBindings {
    const STRATEGY: BindingKey<Strategy | undefined>;
}
export declare class MyAuthActionProvider implements Provider<AuthenticateFn> {
    readonly getStrategy: Getter<Strategy>;
    readonly setCurrentUser: Setter<UserProfile>;
    readonly getMetadata: Getter<MyAuthenticationMetadata>;
    constructor(getStrategy: Getter<Strategy>, setCurrentUser: Setter<UserProfile>, getMetadata: Getter<MyAuthenticationMetadata>);
    value(): AuthenticateFn;
    action(request: Request): Promise<UserProfile | undefined>;
}
