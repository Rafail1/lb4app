import {Entity, model, property, belongsTo} from '@loopback/repository';
import {User} from "../../models";

@model({settings: {}})
export class Bot extends Entity {
    @property({
        type: 'string',
        id: true,
    })
    id?: string;

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

    @belongsTo(() => User)
    userId: number;

    constructor(data?: Partial<Bot>) {
        super(data);
    }
}
