import { DefaultCrudRepository } from '@loopback/repository';
import { ItemFieldTypeValue } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ItemFieldTypeValueRepository extends DefaultCrudRepository<
  ItemFieldTypeValue,
  typeof ItemFieldTypeValue.prototype.id> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ItemFieldTypeValue, dataSource);
  }
}
