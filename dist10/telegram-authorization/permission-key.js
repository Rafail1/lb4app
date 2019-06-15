"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SecuredType;
(function (SecuredType) {
    SecuredType[SecuredType["IS_AUTHENTICATED"] = 0] = "IS_AUTHENTICATED";
    SecuredType[SecuredType["PERMIT_ALL"] = 1] = "PERMIT_ALL";
    SecuredType[SecuredType["HAS_ANY_ROLE"] = 2] = "HAS_ANY_ROLE";
    SecuredType[SecuredType["HAS_ROLES"] = 3] = "HAS_ROLES";
    SecuredType[SecuredType["OWNER"] = 4] = "OWNER";
    SecuredType[SecuredType["DENY_ALL"] = 5] = "DENY_ALL";
})(SecuredType = exports.SecuredType || (exports.SecuredType = {}));
//# sourceMappingURL=permission-key.js.map