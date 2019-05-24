import {inject, Provider, ValueOrPromise} from "@loopback/context";
import {Strategy} from "passport";
const CustomStrategy = require('passport-custom');
import {
    AUTHENTICATION_METADATA_KEY,
    AuthenticationBindings,
    AuthenticationMetadata, UserProfile,
} from "@loopback/authentication";
import {UserRepository, UserRoleRepository} from "../repositories";
import {HttpErrors} from "@loopback/rest/dist";
import {User} from "../models";
import {MethodDecoratorFactory} from "@loopback/metadata";
import {IncomingMessage} from "http";

export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
    constructor(
        @inject(AuthenticationBindings.METADATA) private metadata: MyAuthenticationMetadata,
        @inject('repositories.UserRepository') private userRepository: UserRepository,
        @inject('repositories.UserRoleRepository') private userRoleRepository: UserRoleRepository,
    ) {}

    value(): ValueOrPromise<Strategy | undefined> {
        if (!this.metadata) return;
        return new CustomStrategy((payload:IncomingMessage, done:(err: Error | null, user?: User | false, info?: Object) => void) => {
            const hash = payload.headers.authorization || '';
            this.verifyToken({hash}, done)
        });

    }
    async verifyToken(
        payload: Credentials,
        done: (err: Error | null, user?: User | false, info?: Object) => void,
    ) {
        try {
            const {hash} = payload;
            const user = await this.userRepository.findOne({where: {hash}});
            if (!user) return done(null, false);
            await this.verifyRoles(user);
            done(null, user);
        } catch (err) {
            if (err.name === 'UnauthorizedError') done(null, false);
            done(err, false);
        }
    }

    async verifyRoles(user: User) {
        const {type, roles} = this.metadata;

        if ([SecuredType.IS_AUTHENTICATED, SecuredType.PERMIT_ALL].includes(type)) return;

        if (type === SecuredType.HAS_ANY_ROLE) {
            if (!roles.length) return;
            const {count} = await this.userRoleRepository.count({
                userId: user.id,
                roleId: {inq: roles},
            });

            if (count) return;
        } else if (type === SecuredType.HAS_ROLES && roles.length) {
            const userRoles = await this.userRoleRepository.find({where: {userId: user.id}});
            const roleIds = userRoles.map(ur => ur.roleId);
            let valid = true;
            for (const role of roles)
                if (!roleIds.includes(role)) {
                    valid = false;
                    break;
                }

            if (valid) return;
        }

        throw new HttpErrors.Unauthorized('Invalid authorization');
    }
}

export interface Credentials {
    hash:string
}

export enum SecuredType {
    IS_AUTHENTICATED, // any authenticated user
    PERMIT_ALL, // bypass security check, permit everyone
    HAS_ANY_ROLE, // user must have one or more roles specified in the `roles` attribute
    HAS_ROLES, // user mast have all roles specified in the `roles` attribute
    DENY_ALL, // you shall not pass!
}
export interface MyAuthenticationMetadata extends AuthenticationMetadata {
    type: SecuredType;
    roles: string[];
}
export function secured(
    type: SecuredType = SecuredType.IS_AUTHENTICATED, // more on this below
    roles: string[] = [],
    strategy: string = 'jwt',
    options?: object,
) {
    // we will use a custom interface. more on this below
    return MethodDecoratorFactory.createDecorator<MyAuthenticationMetadata>(AUTHENTICATION_METADATA_KEY, {
        type,
        roles,
        strategy,
        options,
    });
}