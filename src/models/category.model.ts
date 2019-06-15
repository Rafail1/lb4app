import { Entity, model, property, belongsTo, hasMany } from '@loopback/repository';
import { IBlock } from './i-block.model';
import { Bot } from '../telegram-bot/models';

@model()
export class Category extends Entity {

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

  @belongsTo(() => IBlock)
  iblockId: string;

  @belongsTo(() => Category)
  parentId: string;

  @belongsTo(() => Bot)
  botId: string;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}
