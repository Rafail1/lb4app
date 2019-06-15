import { Entity } from '@loopback/repository';
export declare class ItemCategory extends Entity {
    constructor(data?: Partial<ItemCategory>);
    categotyId: string;
    itemId: string;
}
