import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}
