import { Entity, model, property } from '@loopback/repository';

@model({ settings: {} })
export class Button extends Entity {
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

  @property({
    type: 'number',
    required: true,
  })
  type: number;

  constructor(data?: Partial<Button>) {
    super(data);
  }
}

export interface ButtonRelations {
  // describe navigational properties here
}

export type ButtonWithRelations = Button & ButtonRelations;
