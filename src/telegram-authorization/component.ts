import { Component, ProviderMap } from '@loopback/core';
import { MyAuthActionProvider, MyAuthBindings } from "./providers/auth-action.provider";
import { MyAuthMetadataProvider } from "./providers/auth-metadata.provider";
import { MyAuthStrategyProvider } from "./providers/auth-strategy.provider";
import { AuthenticationBindings } from '@loopback/authentication';

export class TelegramAuthorizationComponent implements Component {
    providers?: ProviderMap;

    constructor() {
        this.providers = {
            [AuthenticationBindings.AUTH_ACTION.key]: MyAuthActionProvider,
            [AuthenticationBindings.METADATA.key]: MyAuthMetadataProvider,
            [MyAuthBindings.STRATEGY.key]: MyAuthStrategyProvider,
        };
    }
}
