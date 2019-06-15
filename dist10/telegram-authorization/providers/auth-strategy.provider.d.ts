import { Provider, ValueOrPromise } from "@loopback/context";
import { Strategy } from "passport";
import { UserRepository, UserRoleRepository } from "../../repositories";
import { User } from "../../models";
import { Credentials, MyAuthenticationMetadata } from "../types";
import { Persistable } from "@loopback/repository";
export declare class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
    private metadata;
    private userRepository;
    private userRoleRepository;
    constructor(metadata: MyAuthenticationMetadata, userRepository: UserRepository, userRoleRepository: UserRoleRepository);
    value(): ValueOrPromise<Strategy | undefined>;
    verifyToken(payload: Credentials, done: (err: Error | null, user?: User | false, info?: Object) => void): Promise<void>;
    verifyOwner(user: User, id: string, model?: Persistable): Promise<void>;
    verifyRoles(user: User): Promise<void>;
}
