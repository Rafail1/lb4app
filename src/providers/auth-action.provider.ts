import {BindingKey, Getter, inject, Provider, Setter} from "@loopback/context";
import {AuthenticateFn, AuthenticationBindings, StrategyAdapter, UserProfile} from "@loopback/authentication";
import {Strategy} from "passport";
import {MyAuthenticationMetadata, SecuredType} from "./auth-strategy.provider";
import {Request} from "@loopback/rest";
export namespace MyAuthBindings {
    export const STRATEGY = BindingKey.create<Strategy | undefined>('authentication.strategy');
}
export class MyAuthActionProvider implements Provider<AuthenticateFn> {
    constructor(
        @inject.getter(MyAuthBindings.STRATEGY) readonly getStrategy: Getter<Strategy>,
        @inject.setter(AuthenticationBindings.CURRENT_USER) readonly setCurrentUser: Setter<UserProfile>,
        @inject.getter(AuthenticationBindings.METADATA) readonly getMetadata: Getter<MyAuthenticationMetadata>,
    ) {}

    value(): AuthenticateFn {
        return request => this.action(request);
    }

    async action(request: Request): Promise<UserProfile | undefined> {
        const metadata = await this.getMetadata();
        if (metadata && metadata.type === SecuredType.PERMIT_ALL) return;

        const strategy = await this.getStrategy();
        if (!strategy) return;
        const strategyAdapter = new StrategyAdapter(strategy);
        const user = await strategyAdapter.authenticate(request);
        this.setCurrentUser(user);
        return user;
    }
}
