import { Entity, model, property, belongsTo, hasMany } from '@loopback/repository';
import { IBlock } from './i-block.model';
import { type } from 'os';

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
  iblock: string;

  @belongsTo(() => Category)
  parent: string;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelation {
  iblock?: string
  parent?: string
}

export type CategoryWithRelation = Category & CategoryRelation
