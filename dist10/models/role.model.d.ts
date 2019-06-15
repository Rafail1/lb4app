import { Entity } from '@loopback/repository';
export declare class Role extends Entity {
    id?: string;
    description?: string;
    constructor(data?: Partial<Role>);
}
