import {Entity, model, property} from '@loopback/repository';

@model()
export class Role extends Entity {
  @property({
    type: 'string',
    id: true
  })
  id?: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Role>) {
    super(data);
  }
}
