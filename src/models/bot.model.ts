import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from "./user.model";

@model({settings: {}})
export class Bot extends Entity {
    @property({
        type: 'string',
        id: true,
    })
    id?: string;

    @property({
        type: 'boolean',
        default: true,
    })
    active?: boolean;

    @property({
        type: 'string',
        required: true,
    })
    apiKey: string;

    @belongsTo(() => User)
    userId: number;

    constructor(data?: Partial<Bot>) {
        super(data);
    }
}
