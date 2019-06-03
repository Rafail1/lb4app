import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User } from "../../models";

@model({ settings: {} })
export class Bot extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    id?: number;

    @property({
        type: 'boolean',
        default: false,
    })
    active?: boolean;

    @property({
        type: 'string',
        required: true,
    })
    apiKey: string;

    @property({
        type: 'string'
    })
    first_name?: string;

    @property({
        type: 'string'
    })
    username?: string;

    @belongsTo(() => User)
    userId: number;

    constructor(data?: Partial<Bot>) {
        super(data);
    }
}
