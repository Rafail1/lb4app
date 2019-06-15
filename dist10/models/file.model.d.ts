import { Entity } from '@loopback/repository';
export declare class File extends Entity {
    id?: string;
    botId: string;
    constructor(data?: Partial<File>);
}
