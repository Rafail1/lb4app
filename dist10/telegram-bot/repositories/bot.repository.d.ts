import { DefaultCrudRepository, Options } from '@loopback/repository';
import { Bot } from '../models';
import { MongoDataSource } from "../../datasources";
export declare class BotRepository extends DefaultCrudRepository<Bot, typeof Bot.prototype.id> {
    constructor(dataSource: MongoDataSource);
    create(entity: Bot, options?: Options): Promise<Bot>;
}
