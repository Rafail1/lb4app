import { DefaultCrudRepository } from '@loopback/repository';
import { ItemFieldType } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class ItemFieldTypeRepository extends DefaultCrudRepository<
  ItemFieldType,
  typeof ItemFieldType.prototype.id> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(ItemFieldType, dataSource);
  }
}
