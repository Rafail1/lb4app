import { Entity, model, property, belongsTo } from '@loopback/repository';
import { ItemField } from './item-field.model';

@model()
export class ItemFieldType extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @belongsTo(() => ItemField)
  itemField: string


  constructor(data?: Partial<ItemFieldType>) {
    super(data);
  }
}
