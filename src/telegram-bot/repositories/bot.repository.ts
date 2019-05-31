import {DefaultCrudRepository} from '@loopback/repository';
import {Bot} from '../models';
import {inject} from '@loopback/core';
import {MongoDataSource} from "../../datasources";

export class BotRepository extends DefaultCrudRepository<
  Bot,
  typeof Bot.prototype.id
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Bot, dataSource);
  }
}
