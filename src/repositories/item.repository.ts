import { DefaultCrudRepository } from '@loopback/repository';
import { Item } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ItemRepository extends DefaultCrudRepository<
  Item,
  typeof Item.prototype.id
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Item, dataSource);
  }
}
