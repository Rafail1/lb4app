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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3BpbmcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFpRjtBQUNqRiwrQ0FBeUM7QUFDekMsc0VBQStEO0FBRy9EOztHQUVHO0FBQ0gsTUFBTSxhQUFhLEdBQW1CO0lBQ2xDLFdBQVcsRUFBRSxlQUFlO0lBQzVCLE9BQU8sRUFBRTtRQUNMLGtCQUFrQixFQUFFO1lBQ2hCLE1BQU0sRUFBRTtnQkFDSixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1IsUUFBUSxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztvQkFDMUIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztvQkFDdEIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztvQkFDckIsT0FBTyxFQUFFO3dCQUNMLElBQUksRUFBRSxRQUFRO3dCQUNkLFVBQVUsRUFBRTs0QkFDUixjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO3lCQUNuQzt3QkFDRCxvQkFBb0IsRUFBRSxJQUFJO3FCQUM3QjtpQkFDSjthQUNKO1NBQ0o7S0FDSjtDQUNKLENBQUM7QUFFRjs7R0FFRztBQUNILElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFDdkIsWUFBdUQsR0FBWTtRQUFaLFFBQUcsR0FBSCxHQUFHLENBQVM7SUFDbkUsQ0FBQztJQVFELElBQUk7UUFDQSx3RUFBd0U7UUFDeEUsT0FBTztZQUNILFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1lBQ2hCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUc7WUFDakIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1NBQy9DLENBQUM7SUFDTixDQUFDO0lBSUQsbUJBQW1CO1FBQ2YsT0FBTyxFQUFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0lBQzVDLENBQUM7SUFJRCxhQUFhO1FBQ1QsT0FBTyxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUMsQ0FBQztJQUN0QyxDQUFDO0lBSUQsV0FBVztRQUNQLE9BQU8sRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFDLENBQUM7SUFDcEMsQ0FBQztJQUlELGNBQWM7UUFDVixPQUFPLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFDLENBQUM7SUFDdkMsQ0FBQztJQUlELFdBQVcsQ0FBMEIsRUFBVTtRQUMzQyxPQUFPLEVBQUMsT0FBTyxFQUFFLGNBQWMsRUFBQyxDQUFDO0lBQ3JDLENBQUM7SUFJRCxZQUFZO1FBQ1IsT0FBTyxFQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUMsQ0FBQztJQUNyQyxDQUFDO0NBR0osQ0FBQTtBQS9DRztJQU5DLGdDQUFPLENBQUMsb0NBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyQyxVQUFHLENBQUMsT0FBTyxFQUFFO1FBQ1YsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFLGFBQWE7U0FDdkI7S0FDSixDQUFDOzs7OzBDQVNEO0FBSUQ7SUFGQyxVQUFHLENBQUMsd0JBQXdCLENBQUM7SUFDN0IsZ0NBQU8sQ0FBQyxvQ0FBVyxDQUFDLGdCQUFnQixDQUFDOzs7O3lEQUdyQztBQUlEO0lBRkMsVUFBRyxDQUFDLGtCQUFrQixDQUFDO0lBQ3ZCLGdDQUFPLENBQUMsb0NBQVcsQ0FBQyxVQUFVLENBQUM7Ozs7bURBRy9CO0FBSUQ7SUFGQyxVQUFHLENBQUMsZ0JBQWdCLENBQUM7SUFDckIsZ0NBQU8sQ0FBQyxvQ0FBVyxDQUFDLFFBQVEsQ0FBQzs7OztpREFHN0I7QUFJRDtJQUZDLFVBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUN6QixnQ0FBTyxDQUFDLG9DQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7O29EQUd0RDtBQUlEO0lBRkMsVUFBRyxDQUFDLHNCQUFzQixDQUFDO0lBQzNCLGdDQUFPLENBQUMsb0NBQVcsQ0FBQyxLQUFLLENBQUM7SUFDZCxXQUFBLFlBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O2lEQUVuQztBQUlEO0lBRkMsVUFBRyxDQUFDLGlCQUFpQixDQUFDO0lBQ3RCLGdDQUFPLENBQUMsb0NBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7Ozs7a0RBR25EO0FBdERRLGNBQWM7SUFDVixXQUFBLGdCQUFNLENBQUMsbUJBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7O0dBRHJDLGNBQWMsQ0F5RDFCO0FBekRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXF1ZXN0LCBSZXN0QmluZGluZ3MsIGdldCwgUmVzcG9uc2VPYmplY3QsIHBhcmFtfSBmcm9tICdAbG9vcGJhY2svcmVzdCc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnQGxvb3BiYWNrL2NvbnRleHQnO1xuaW1wb3J0IHtzZWN1cmVkLCBTZWN1cmVkVHlwZX0gZnJvbSBcIi4uL3RlbGVncmFtLWF1dGhvcml6YXRpb25cIjtcbmltcG9ydCB7Qm90fSBmcm9tIFwiLi4vdGVsZWdyYW0tYm90L21vZGVsc1wiO1xuXG4vKipcbiAqIE9wZW5BUEkgcmVzcG9uc2UgZm9yIHBpbmcoKVxuICovXG5jb25zdCBQSU5HX1JFU1BPTlNFOiBSZXNwb25zZU9iamVjdCA9IHtcbiAgICBkZXNjcmlwdGlvbjogJ1BpbmcgUmVzcG9uc2UnLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nOiB7XG4gICAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0JyxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGdyZWV0aW5nOiB7dHlwZTogJ3N0cmluZyd9LFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB7dHlwZTogJ3N0cmluZyd9LFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHt0eXBlOiAnc3RyaW5nJ30sXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiB7dHlwZTogJ3N0cmluZyd9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG4vKipcbiAqIEEgc2ltcGxlIGNvbnRyb2xsZXIgdG8gYm91bmNlIGJhY2sgaHR0cCByZXF1ZXN0c1xuICovXG5leHBvcnQgY2xhc3MgUGluZ0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKEBpbmplY3QoUmVzdEJpbmRpbmdzLkh0dHAuUkVRVUVTVCkgcHJpdmF0ZSByZXE6IFJlcXVlc3QpIHtcbiAgICB9XG5cbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5JU19BVVRIRU5USUNBVEVEKVxuICAgIEBnZXQoJy9waW5nJywge1xuICAgICAgICByZXNwb25zZXM6IHtcbiAgICAgICAgICAgICcyMDAnOiBQSU5HX1JFU1BPTlNFLFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgcGluZygpOiBvYmplY3Qge1xuICAgICAgICAvLyBSZXBseSB3aXRoIGEgZ3JlZXRpbmcsIHRoZSBjdXJyZW50IHRpbWUsIHRoZSB1cmwsIGFuZCByZXF1ZXN0IGhlYWRlcnNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdyZWV0aW5nOiAnSGVsbG8gZnJvbSBMb29wQmFjaycsXG4gICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgdXJsOiB0aGlzLnJlcS51cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnJlcS5oZWFkZXJzKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBAZ2V0KCcvcGluZy9pcy1hdXRoZW50aWNhdGVkJylcbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5JU19BVVRIRU5USUNBVEVEKVxuICAgIHRlc3RJc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiB7bWVzc2FnZTogJ2lzQXV0aGVudGljYXRlZDogT0snfTtcbiAgICB9XG5cbiAgICBAZ2V0KCcvcGluZy9wZXJtaXQtYWxsJylcbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5QRVJNSVRfQUxMKVxuICAgIHRlc3RQZXJtaXRBbGwoKSB7XG4gICAgICAgIHJldHVybiB7bWVzc2FnZTogJ3Blcm1pdEFsbDogT0snfTtcbiAgICB9XG5cbiAgICBAZ2V0KCcvcGluZy9kZW55LWFsbCcpXG4gICAgQHNlY3VyZWQoU2VjdXJlZFR5cGUuREVOWV9BTEwpXG4gICAgdGVzdERlbnlBbGwoKSB7XG4gICAgICAgIHJldHVybiB7bWVzc2FnZTogJ2RlbnlBbGw6IE9LJ307XG4gICAgfVxuXG4gICAgQGdldCgnL3BpbmcvaGFzLWFueS1yb2xlJylcbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5IQVNfQU5ZX1JPTEUsIFsnQURNSU4nLCAnQURNSU4yJ10pXG4gICAgdGVzdEhhc0FueVJvbGUoKSB7XG4gICAgICAgIHJldHVybiB7bWVzc2FnZTogJ2hhc0FueVJvbGU6IE9LJ307XG4gICAgfVxuXG4gICAgQGdldCgnL3BpbmcvaGFzLXJvbGVzL3tpZH0nKVxuICAgIEBzZWN1cmVkKFNlY3VyZWRUeXBlLk9XTkVSKVxuICAgIHRlc3RJZFJvbGVzKEBwYXJhbS5wYXRoLnN0cmluZygnaWQnKSBpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB7bWVzc2FnZTogJ2hhc093bmVyOiBPSyd9O1xuICAgIH1cblxuICAgIEBnZXQoJy9waW5nL2hhcy1yb2xlcycpXG4gICAgQHNlY3VyZWQoU2VjdXJlZFR5cGUuSEFTX1JPTEVTLCBbJ0FETUlOJywgJ0FETUlOMiddKVxuICAgIHRlc3RIYXNSb2xlcygpIHtcbiAgICAgICAgcmV0dXJuIHttZXNzYWdlOiAnaGFzUm9sZXM6IE9LJ307XG4gICAgfVxuXG5cbn1cbiJdfQ==