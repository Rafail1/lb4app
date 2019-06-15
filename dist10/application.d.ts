import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
import { UserRepository, UserRoleRepository, RoleRepository } from './repositories';
declare const KerzachiApplication_base;
export declare class KerzachiApplication extends KerzachiApplication_base {
    constructor(options?: ApplicationConfig);
    start(): Promise<void>;
    init(userRepository: UserRepository, userRoleRepository: UserRoleRepository, roleRepository: RoleRepository): void;
}
export {};
