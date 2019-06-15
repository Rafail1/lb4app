import { Entity } from '@loopback/repository';
export declare class Item extends Entity {
    id?: string;
    active?: boolean;
    title: string;
    type?: number;
    price?: number;
    iblockId: string;
    constructor(data?: Partial<Item>);
}
