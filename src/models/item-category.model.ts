import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Category } from './category.model';
import { Item } from './item.model';

@model()
export class ItemCategory extends Entity {

  constructor(data?: Partial<ItemCategory>) {
    super(data);
  }
  @belongsTo(() => Category)
  categotyId: string

  @belongsTo(() => Item)
  itemId: string
}
