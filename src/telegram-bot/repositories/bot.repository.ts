import { DefaultCrudRepository, DataObject, Options } from '@loopback/repository';
import { Bot } from '../models';
import { inject } from '@loopback/core';
import { MongoDataSource } from "../../datasources";
import * as TelegramBot from 'node-telegram-bot-api';
export class BotRepository extends DefaultCrudRepository<
  Bot,
  typeof Bot.prototype.id
  > {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Bot, dataSource);
  }
  async create(entity: Bot, options?: Options): Promise<Bot> {
    const bot = new TelegramBot(entity.apiKey, { polling: false });
    const me = await bot.getMe();
    if (entity.active) {
      //todo запуск бота на удаленном сервере
    }
    entity.id = me.id;
    entity.first_name = me.first_name;
    entity.username = me.username;
    return await super.create(entity, options);
  }
}
