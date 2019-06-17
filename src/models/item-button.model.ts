import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class ItemButton extends Entity {
  @property({
    type: 'string',
  })
  title?: string;


  constructor(data?: Partial<ItemButton>) {
    super(data);
  }
}

export interface ItemButtonRelations {
  // describe navigational properties here
}

export type ItemButtonWithRelations = ItemButton & ItemButtonRelations;
