import { Entity } from '@loopback/repository';
export declare class Bot extends Entity {
    id?: number;
    apiKey: string;
    first_name?: string;
    username?: string;
    active?: boolean;
    remoteAddr?: string;
    userId: number;
    constructor(data?: Partial<Bot>);
}
