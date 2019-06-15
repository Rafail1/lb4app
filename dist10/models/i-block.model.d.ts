import { Entity } from '@loopback/repository';
export declare class IBlock extends Entity {
    id?: string;
    title: string;
    constructor(data?: Partial<IBlock>);
}
