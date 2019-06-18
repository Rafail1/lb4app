import { DefaultCrudRepository } from '@loopback/repository';
import { IBlock } from '../models';
import { MongoDataSource } from '../datasources';
import { inject } from '@loopback/core';

export class IBlockRepository extends DefaultCrudRepository<
  IBlock,
  typeof IBlock.prototype.id> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(IBlock, dataSource);
  }
}
