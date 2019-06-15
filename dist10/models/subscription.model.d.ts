import { Entity } from '@loopback/repository';
export declare class Subscription extends Entity {
    id?: string;
    clientId: number;
    categoryId: string;
    constructor(data?: Partial<Subscription>);
}
