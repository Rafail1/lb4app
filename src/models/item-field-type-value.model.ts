import { Entity, model, property, belongsTo } from '@loopback/repository';
import { ItemFieldType } from '.';

@model()
export class ItemFieldTypeValue extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'any',
    required: true,
  })
  value: any;


  @belongsTo(() => ItemFieldType)
  itemFieldType: string

  constructor(data?: Partial<ItemFieldTypeValue>) {
    super(data);
  }
}
