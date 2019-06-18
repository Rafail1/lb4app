import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Bot } from '../telegram-bot/models';

@model()
export class IBlock extends Entity {
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
  bot: number

  constructor(data?: Partial<IBlock>) {
    super(data);
  }
}


export interface IBlockWithRelations {
  bot?: number
}
