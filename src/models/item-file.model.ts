import { Entity, model, property, belongsTo } from '@loopback/repository';
import { Item } from '.';
import { File } from '.';

@model({ settings: {} })
export class ItemFile extends Entity {

  constructor(data?: Partial<ItemFile>) {
    super(data);
  }

  @belongsTo(() => Item)
  item: string

  @belongsTo(() => File)
  file: string

}

export interface ItemFileRelations {
  // describe navigational properties here
}

export type ItemFileWithRelations = ItemFile & ItemFileRelations;
