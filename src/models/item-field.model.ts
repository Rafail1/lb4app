import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Bot } from '../telegram-bot/models';

@model()
export class ItemField extends Entity {
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

  @belongsTo(() => Bot)
  bot: string

  constructor(data?: Partial<ItemField>) {
    super(data);
  }
}
