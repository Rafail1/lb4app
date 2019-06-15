import { Entity } from '@loopback/repository';
export declare class UserRole extends Entity {
    id?: string;
    userId: number;
    roleId: string;
    constructor(data?: Partial<UserRole>);
}
