import { Entity, model, property, belongsTo } from '@loopback/repository';
import { IBlock } from './i-block.model';

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
  iblockId: string

  constructor(data?: Partial<Item>) {
    super(data);
  }
}
