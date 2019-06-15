"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_action_provider_1 = require("./providers/auth-action.provider");
const auth_metadata_provider_1 = require("./providers/auth-metadata.provider");
const auth_strategy_provider_1 = require("./providers/auth-strategy.provider");
const authentication_1 = require("@loopback/authentication");
class TelegramAuthorizationComponent {
    constructor() {
        this.providers = {
            [authentication_1.AuthenticationBindings.AUTH_ACTION.key]: auth_action_provider_1.MyAuthActionProvider,
            [authentication_1.AuthenticationBindings.METADATA.key]: auth_metadata_provider_1.MyAuthMetadataProvider,
            [auth_action_provider_1.MyAuthBindings.STRATEGY.key]: auth_strategy_provider_1.MyAuthStrategyProvider,
        };
    }
}
exports.TelegramAuthorizationComponent = TelegramAuthorizationComponent;
//# sourceMappingURL=component.js.map