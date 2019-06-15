import { UserRepository, UserRoleRepository } from '../repositories';
import { User } from "../models";
import { Credentials } from "../telegram-authorization";
export declare class UserController {
    private userRepository;
    private userRoleRepository;
    constructor(userRepository: UserRepository, userRoleRepository: UserRoleRepository);
    authenticate(user: User): Promise<{
        token: string;
        first_name: string | undefined;
        last_name: string | undefined;
        photo_url: string | undefined;
        username: string | undefined;
        roles: string[];
    } | undefined>;
    loginByHash(credentials: Credentials): Promise<{
        token: string;
        first_name: string | undefined;
        last_name: string | undefined;
        photo_url: string | undefined;
        username: string | undefined;
        roles: string[];
    }>;
}
