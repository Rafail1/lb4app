import { Entity, model, property, belongsTo, hasOne, hasMany } from '@loopback/repository';
import { IBlock } from './i-block.model';
import { ItemFile } from './item-file.model';

@model()
export class Item extends Entity {
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
  title: string;

  @property({
    type: 'number',
    default: 0,
  })
  type?: number;

  @property({
    type: 'number',
  })
  price?: number;

  @belongsTo(() => IBlock)
  iblock: string

  constructor(data?: Partial<Item>) {
    super(data);
  }
}


export interface ItemRelations {
  iblock?: string
  images?: string[]
  categories?: string[]
  fields?: string[]
  components?: string[]
  buttons?: object
  template?: string
}

export type ItemWithRelations = Item & ItemRelations;
