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
const rest_1 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const telegram_authorization_1 = require("../telegram-authorization");
/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE = {
    description: 'Ping Response',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    greeting: { type: 'string' },
                    date: { type: 'string' },
                    url: { type: 'string' },
                    headers: {
                        type: 'object',
                        properties: {
                            'Content-Type': { type: 'string' },
                        },
                        additionalProperties: true,
                    },
                },
            },
        },
    },
};
/**
 * A simple controller to bounce back http requests
 */
let PingController = class PingController {
    constructor(req) {
        this.req = req;
    }
    ping() {
        // Reply with a greeting, the current time, the url, and request headers
        return {
            greeting: 'Hello from LoopBack',
            date: new Date(),
            url: this.req.url,
            headers: Object.assign({}, this.req.headers),
        };
    }
    testIsAuthenticated() {
        return { message: 'isAuthenticated: OK' };
    }
    testPermitAll() {
        return { message: 'permitAll: OK' };
    }
    testDenyAll() {
        return { message: 'denyAll: OK' };
    }
    testHasAnyRole() {
        return { message: 'hasAnyRole: OK' };
    }
    testIdRoles(id) {
        return { message: 'hasOwner: OK' };
    }
    testHasRoles() {
        return { message: 'hasRoles: OK' };
    }
};
__decorate([
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/ping', {
        responses: {
            '200': PING_RESPONSE,
        },
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], PingController.prototype, "ping", null);
__decorate([
    rest_1.get('/ping/is-authenticated'),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PingController.prototype, "testIsAuthenticated", null);
__decorate([
    rest_1.get('/ping/permit-all'),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.PERMIT_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PingController.prototype, "testPermitAll", null);
__decorate([
    rest_1.get('/ping/deny-all'),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.DENY_ALL),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PingController.prototype, "testDenyAll", null);
__decorate([
    rest_1.get('/ping/has-any-role'),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.HAS_ANY_ROLE, ['ADMIN', 'ADMIN2']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PingController.prototype, "testHasAnyRole", null);
__decorate([
    rest_1.get('/ping/has-roles/{id}'),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.OWNER),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PingController.prototype, "testIdRoles", null);
__decorate([
    rest_1.get('/ping/has-roles'),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.HAS_ROLES, ['ADMIN', 'ADMIN2']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PingController.prototype, "testHasRoles", null);
PingController = __decorate([
    __param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)),
    __metadata("design:paramtypes", [Object])
], PingController);
exports.PingController = PingController;
//# sourceMappingURL=ping.controller.js.map