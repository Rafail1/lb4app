"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const core_1 = require("@loopback/core");
const datasources_1 = require("../../datasources");
const TelegramBot = require("node-telegram-bot-api");
let BotRepository = class BotRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Bot, dataSource);
    }
    async create(entity, options) {
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
};
BotRepository = __decorate([
    __param(0, core_1.inject('datasources.mongo')),
    __metadata("design:paramtypes", [datasources_1.MongoDataSource])
], BotRepository);
exports.BotRepository = BotRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVsZWdyYW0tYm90L3JlcG9zaXRvcmllcy9ib3QucmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFrRjtBQUNsRixzQ0FBZ0M7QUFDaEMseUNBQXdDO0FBQ3hDLG1EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLGtDQUdoQztJQUNELFlBQytCLFVBQTJCO1FBRXhELEtBQUssQ0FBQyxZQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBVyxFQUFFLE9BQWlCO1FBQ3pDLE1BQU0sR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUMvRCxNQUFNLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDakIsdUNBQXVDO1NBQ3hDO1FBQ0QsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDOUIsT0FBTyxNQUFNLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRixDQUFBO0FBcEJZLGFBQWE7SUFLckIsV0FBQSxhQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtxQ0FBYSw2QkFBZTtHQUwvQyxhQUFhLENBb0J6QjtBQXBCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmF1bHRDcnVkUmVwb3NpdG9yeSwgRGF0YU9iamVjdCwgT3B0aW9ucyB9IGZyb20gJ0Bsb29wYmFjay9yZXBvc2l0b3J5JztcbmltcG9ydCB7IEJvdCB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdAbG9vcGJhY2svY29yZSc7XG5pbXBvcnQgeyBNb25nb0RhdGFTb3VyY2UgfSBmcm9tIFwiLi4vLi4vZGF0YXNvdXJjZXNcIjtcbmltcG9ydCAqIGFzIFRlbGVncmFtQm90IGZyb20gJ25vZGUtdGVsZWdyYW0tYm90LWFwaSc7XG5leHBvcnQgY2xhc3MgQm90UmVwb3NpdG9yeSBleHRlbmRzIERlZmF1bHRDcnVkUmVwb3NpdG9yeTxcbiAgQm90LFxuICB0eXBlb2YgQm90LnByb3RvdHlwZS5pZFxuICA+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdCgnZGF0YXNvdXJjZXMubW9uZ28nKSBkYXRhU291cmNlOiBNb25nb0RhdGFTb3VyY2UsXG4gICkge1xuICAgIHN1cGVyKEJvdCwgZGF0YVNvdXJjZSk7XG4gIH1cbiAgYXN5bmMgY3JlYXRlKGVudGl0eTogQm90LCBvcHRpb25zPzogT3B0aW9ucyk6IFByb21pc2U8Qm90PiB7XG4gICAgY29uc3QgYm90ID0gbmV3IFRlbGVncmFtQm90KGVudGl0eS5hcGlLZXksIHsgcG9sbGluZzogZmFsc2UgfSk7XG4gICAgY29uc3QgbWUgPSBhd2FpdCBib3QuZ2V0TWUoKTtcbiAgICBpZiAoZW50aXR5LmFjdGl2ZSkge1xuICAgICAgLy90b2RvINC30LDQv9GD0YHQuiDQsdC+0YLQsCDQvdCwINGD0LTQsNC70LXQvdC90L7QvCDRgdC10YDQstC10YDQtVxuICAgIH1cbiAgICBlbnRpdHkuaWQgPSBtZS5pZDtcbiAgICBlbnRpdHkuZmlyc3RfbmFtZSA9IG1lLmZpcnN0X25hbWU7XG4gICAgZW50aXR5LnVzZXJuYW1lID0gbWUudXNlcm5hbWU7XG4gICAgcmV0dXJuIGF3YWl0IHN1cGVyLmNyZWF0ZShlbnRpdHksIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=