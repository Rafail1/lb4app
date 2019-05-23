import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
    @property({
        type: 'string',
        id: true,
        generated: true
    })
    id?: string;

    @property({
        type: 'date',
        required: true,
    })
    auth_date: Date;

    @property({
        type: 'string',
        required: false,
    })
    first_name?: string;

    @property({
        type: 'string',
        required: false,
    })
    last_name?: string;

    @property({
        type: 'string',
        required: true,
    })
    hash: string;

    @property({
        type: 'string',
        required: false,
    })
    photo_url?: string;

    @property({
        type: 'string',
        required: false,
    })
    username?: string;

    constructor(data?: Partial<User>) {
        super(data);
    }
}
