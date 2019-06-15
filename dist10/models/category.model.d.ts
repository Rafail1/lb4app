import { Entity } from '@loopback/repository';
export declare class Category extends Entity {
    id?: string;
    active?: boolean;
    title: string;
    iblockId: string;
    parentId: string;
    botId: string;
    constructor(data?: Partial<Category>);
}
