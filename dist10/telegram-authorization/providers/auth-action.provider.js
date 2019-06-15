"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const authentication_1 = require("@loopback/authentication");
const permission_key_1 = require("../permission-key");
var MyAuthBindings;
(function (MyAuthBindings) {
    MyAuthBindings.STRATEGY = context_1.BindingKey.create('authentication.strategy');
})(MyAuthBindings = exports.MyAuthBindings || (exports.MyAuthBindings = {}));
let MyAuthActionProvider = class MyAuthActionProvider {
    constructor(getStrategy, setCurrentUser, getMetadata) {
        this.getStrategy = getStrategy;
        this.setCurrentUser = setCurrentUser;
        this.getMetadata = getMetadata;
    }
    value() {
        return request => this.action(request);
    }
    async action(request) {
        const metadata = await this.getMetadata();
        if (metadata && metadata.type === permission_key_1.SecuredType.PERMIT_ALL)
            return;
        const strategy = await this.getStrategy();
        if (!strategy)
            return;
        const strategyAdapter = new authentication_1.StrategyAdapter(strategy);
        const user = await strategyAdapter.authenticate(request);
        this.setCurrentUser(user);
        return user;
    }
};
MyAuthActionProvider = __decorate([
    __param(0, context_1.inject.getter(MyAuthBindings.STRATEGY)),
    __param(1, context_1.inject.setter(authentication_1.AuthenticationBindings.CURRENT_USER)),
    __param(2, context_1.inject.getter(authentication_1.AuthenticationBindings.METADATA)),
    __metadata("design:paramtypes", [Function, Function, Function])
], MyAuthActionProvider);
exports.MyAuthActionProvider = MyAuthActionProvider;
//# sourceMappingURL=auth-action.provider.js.map