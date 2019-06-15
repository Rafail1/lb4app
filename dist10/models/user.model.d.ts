import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: number;
    auth_date: number;
    first_name?: string;
    last_name?: string;
    hash: string;
    photo_url?: string;
    username?: string;
    constructor(data?: Partial<User>);
}
