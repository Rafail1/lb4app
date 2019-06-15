import {DefaultCrudRepository} from '@loopback/repository';
import {File} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FileRepository extends DefaultCrudRepository<
  File,
  typeof File.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(File, dataSource);
  }
}
