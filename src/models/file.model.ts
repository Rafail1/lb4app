import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Bot } from '../telegram-bot/models';

@model()
export class File extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @belongsTo(() => Bot)
  bot: number

  constructor(data?: Partial<File>) {
    super(data);
  }
}
