import { DefaultCrudRepository } from '@loopback/repository';
import { Category } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class CategoryRepository extends DefaultCrudRepository<
  Category,
  typeof Category.prototype.id
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Category, dataSource);
  }
}