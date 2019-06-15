import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Bot } from '../telegram-bot/models';

@model()
export class File extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string'
  })
  uniqueId?: string;

  @belongsTo(() => Bot)
  botId: number

  constructor(data?: Partial<File>) {
    super(data);
  }
}
