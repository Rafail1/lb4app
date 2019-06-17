import { DefaultCrudRepository } from '@loopback/repository';
import { ItemField } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ItemFieldRepository extends DefaultCrudRepository<
  ItemField,
  typeof ItemField.prototype.id> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ItemField, dataSource);
  }
}
