import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Category } from './category.model';

@model()
export class Subscription extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  clientId: number;

  @belongsTo(() => Category)
  categoryId: string

  constructor(data?: Partial<Subscription>) {
    super(data);
  }
}
