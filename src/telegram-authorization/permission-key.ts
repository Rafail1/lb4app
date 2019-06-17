export enum SecuredType {
    IS_AUTHENTICATED, // any authenticated user
    PERMIT_ALL, // bypass security check, permit everyone
    HAS_ANY_ROLE, // user must have one or more roles specified in the `roles` attribute
    HAS_ROLES, // user mast have all roles specified in the `roles` attribute
    DENY_ALL, // you shall not pass!
}
