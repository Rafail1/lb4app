"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const permission_key_1 = require("../permission-key");
const core_1 = require("@loopback/core");
const authentication_1 = require("@loopback/authentication");
function secured(type = permission_key_1.SecuredType.IS_AUTHENTICATED, roles = [], model, id) {
    // we will use a custom interface. more on this below
    return core_1.MethodDecoratorFactory.createDecorator(authentication_1.AUTHENTICATION_METADATA_KEY, {
        type,
        roles: roles || [],
        model: model || undefined,
        id: id || '',
        options: undefined,
        strategy: "",
    });
}
exports.secured = secured;
//# sourceMappingURL=auth.decorator.js.map