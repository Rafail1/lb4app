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
const rest_1 = require("@loopback/rest");
const repositories_1 = require("../repositories");
const repository_1 = require("@loopback/repository");
const telegram_authorization_1 = require("../../telegram-authorization");
const models_1 = require("../models");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const models_2 = require("../../models");
const owner_1 = require("../../custom/owner");
let BotController = class BotController extends owner_1.Owner {
    constructor(botRepository, currentUser) {
        super(currentUser);
        this.botRepository = botRepository;
        this.currentUser = currentUser;
    }
    async createBot(bot) {
        bot.userId = this.currentUser.id;
        try {
            return await this.botRepository.create(bot);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    async getBots(filter = {}) {
        this.ownerFilter(filter);
        return await this.botRepository.find(filter);
    }
    async updateAll(data, where = {}) {
        this.ownerWhere(where);
        const updatedCount = await this.botRepository.updateAll(data, where);
        return updatedCount.count;
    }
    async findById(id) {
        this.checkOwner(this.botRepository, id);
        return await this.botRepository.findById(id);
    }
    async updateById(id, data) {
        this.checkOwner(this.botRepository, id);
        await this.botRepository.updateById(id, data);
    }
    async deleteById(id) {
        this.checkOwner(this.botRepository, id);
        await this.botRepository.deleteById(id);
    }
    async stopById(id) {
        this.checkOwner(this.botRepository, id);
        await this.botRepository.updateById(id, { active: false });
    }
    async startById(id) {
        this.checkOwner(this.botRepository, id);
        const bot = this.botRepository.findById(id);
        await this.botRepository.updateById(id, { active: true });
    }
};
__decorate([
    rest_1.post('/bots'),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    __param(0, rest_1.requestBody({ required: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Bot]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "createBot", null);
__decorate([
    rest_1.get('/bots', {
        responses: {
            '200': {
                description: 'Array of Bot model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Bot } },
                    },
                },
            },
        },
    }),
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Bot))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "getBots", null);
__decorate([
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/bots', {
        responses: {
            '200': {
                description: 'Bot PATCH success count',
                content: { 'application/json': { schema: { 'x-ts-type': Number } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Bot))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Bot, Object]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "updateAll", null);
__decorate([
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    rest_1.get('/bots/{id}', {
        responses: {
            '200': {
                description: 'Bot model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Bot } } },
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "findById", null);
__decorate([
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    rest_1.patch('/bots/{id}', {
        responses: {
            '204': {
                description: 'Bot PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, models_1.Bot]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "updateById", null);
__decorate([
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    rest_1.del('/todos/{id}', {
        responses: {
            '204': {
                description: 'Bot DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "deleteById", null);
__decorate([
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/todos/{id}/stop', {
        responses: {
            '204': {
                description: 'Bot stop success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "stopById", null);
__decorate([
    telegram_authorization_1.secured(telegram_authorization_1.SecuredType.IS_AUTHENTICATED),
    rest_1.post('/todos/{id}/start', {
        responses: {
            '204': {
                description: 'Bot start success',
            },
        },
    }),
    __param(0, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BotController.prototype, "startById", null);
BotController = __decorate([
    __param(0, repository_1.repository(repositories_1.BotRepository)),
    __param(1, core_1.inject(authentication_1.AuthenticationBindings.CURRENT_USER)),
    __metadata("design:paramtypes", [repositories_1.BotRepository,
        models_2.User])
], BotController);
exports.BotController = BotController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVsZWdyYW0tYm90L2NvbnRyb2xsZXJzL2JvdC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQThIO0FBQzlILGtEQUFnRDtBQUNoRCxxREFBaUU7QUFDakUseUVBQTBGO0FBQzFGLHNDQUFnQztBQUNoQyw2REFBK0Y7QUFDL0YseUNBQXdDO0FBQ3hDLHlDQUFvQztBQUNwQyw4Q0FBMkM7QUFFM0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYyxTQUFRLGFBQUs7SUFDcEMsWUFDdUMsYUFBNEIsRUFDUixXQUFpQjtRQUV4RSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7UUFIaUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDUixnQkFBVyxHQUFYLFdBQVcsQ0FBTTtJQUc1RSxDQUFDO0lBSUQsS0FBSyxDQUFDLFNBQVMsQ0FBa0MsR0FBUTtRQUNyRCxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRyxDQUFDO1FBQ2xDLElBQUk7WUFDQSxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDOUM7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDZCxPQUFPLENBQUMsQ0FBQTtTQUNYO0lBQ0wsQ0FBQztJQWVELEtBQUssQ0FBQyxPQUFPLENBQXdELFNBQWlCLEVBQUU7UUFDcEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQVdELEtBQUssQ0FBQyxTQUFTLENBQ0ksSUFBUyxFQUM2QixRQUFlLEVBQUU7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Q0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7Ozs7K0NBR3hDO0FBVUQ7SUFSQyxnQ0FBTyxDQUFDLG9DQUFXLENBQUMsZ0JBQWdCLENBQUM7SUFDckMsV0FBSSxDQUFDLGtCQUFrQixFQUFFO1FBQ3RCLFNBQVMsRUFBRTtZQUNQLEtBQUssRUFBRTtnQkFDSCxXQUFXLEVBQUUsa0JBQWtCO2FBQ2xDO1NBQ0o7S0FDSixDQUFDO0lBQ2MsV0FBQSxZQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs2Q0FHdEM7QUFVRDtJQVJDLGdDQUFPLENBQUMsb0NBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyQyxXQUFJLENBQUMsbUJBQW1CLEVBQUU7UUFDdkIsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFO2dCQUNILFdBQVcsRUFBRSxtQkFBbUI7YUFDbkM7U0FDSjtLQUNKLENBQUM7SUFDZSxXQUFBLFlBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OzhDQUl2QztBQTVIUSxhQUFhO0lBRWpCLFdBQUEsdUJBQVUsQ0FBQyw0QkFBYSxDQUFDLENBQUE7SUFDekIsV0FBQSxhQUFNLENBQUMsdUNBQXNCLENBQUMsWUFBWSxDQUFDLENBQUE7cUNBRE0sNEJBQWE7UUFDSyxhQUFJO0dBSG5FLGFBQWEsQ0E4SHpCO0FBOUhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0LCBwYXJhbSwgcG9zdCwgcmVxdWVzdEJvZHksIEh0dHBFcnJvcnMsIGdldEZpbHRlclNjaGVtYUZvciwgcGF0Y2gsIGdldFdoZXJlU2NoZW1hRm9yLCBkZWwgfSBmcm9tICdAbG9vcGJhY2svcmVzdCc7XG5pbXBvcnQgeyBCb3RSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL3JlcG9zaXRvcmllc1wiO1xuaW1wb3J0IHsgcmVwb3NpdG9yeSwgRmlsdGVyLCBXaGVyZSB9IGZyb20gJ0Bsb29wYmFjay9yZXBvc2l0b3J5JztcbmltcG9ydCB7IHNlY3VyZWQsIFNlY3VyZWRUeXBlLCBNeUF1dGhBY3Rpb25Qcm92aWRlciB9IGZyb20gXCIuLi8uLi90ZWxlZ3JhbS1hdXRob3JpemF0aW9uXCI7XG5pbXBvcnQgeyBCb3QgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25CaW5kaW5ncywgQXV0aGVudGljYXRlRm4sIFVzZXJQcm9maWxlIH0gZnJvbSAnQGxvb3BiYWNrL2F1dGhlbnRpY2F0aW9uJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ0Bsb29wYmFjay9jb3JlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xuaW1wb3J0IHsgT3duZXIgfSBmcm9tICcuLi8uLi9jdXN0b20vb3duZXInO1xuXG5leHBvcnQgY2xhc3MgQm90Q29udHJvbGxlciBleHRlbmRzIE93bmVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQHJlcG9zaXRvcnkoQm90UmVwb3NpdG9yeSkgcHJpdmF0ZSBib3RSZXBvc2l0b3J5OiBCb3RSZXBvc2l0b3J5LFxuICAgICAgICBAaW5qZWN0KEF1dGhlbnRpY2F0aW9uQmluZGluZ3MuQ1VSUkVOVF9VU0VSKSBwcm90ZWN0ZWQgY3VycmVudFVzZXI6IFVzZXJcbiAgICApIHtcbiAgICAgICAgc3VwZXIoY3VycmVudFVzZXIpXG4gICAgfVxuXG4gICAgQHBvc3QoJy9ib3RzJylcbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5JU19BVVRIRU5USUNBVEVEKVxuICAgIGFzeW5jIGNyZWF0ZUJvdChAcmVxdWVzdEJvZHkoeyByZXF1aXJlZDogdHJ1ZSB9KSBib3Q6IEJvdCkge1xuICAgICAgICBib3QudXNlcklkID0gdGhpcy5jdXJyZW50VXNlci5pZCE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5ib3RSZXBvc2l0b3J5LmNyZWF0ZShib3QpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGdldCgnL2JvdHMnLCB7XG4gICAgICAgIHJlc3BvbnNlczoge1xuICAgICAgICAgICAgJzIwMCc6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIEJvdCBtb2RlbCBpbnN0YW5jZXMnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWE6IHsgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgJ3gtdHMtdHlwZSc6IEJvdCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5JU19BVVRIRU5USUNBVEVEKVxuICAgIGFzeW5jIGdldEJvdHMoQHBhcmFtLnF1ZXJ5Lm9iamVjdCgnZmlsdGVyJywgZ2V0RmlsdGVyU2NoZW1hRm9yKEJvdCkpIGZpbHRlcjogRmlsdGVyID0ge30pOiBQcm9taXNlPEJvdFtdPiB7XG4gICAgICAgIHRoaXMub3duZXJGaWx0ZXIoZmlsdGVyKVxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5ib3RSZXBvc2l0b3J5LmZpbmQoZmlsdGVyKVxuICAgIH1cblxuICAgIEBzZWN1cmVkKFNlY3VyZWRUeXBlLklTX0FVVEhFTlRJQ0FURUQpXG4gICAgQHBhdGNoKCcvYm90cycsIHtcbiAgICAgICAgcmVzcG9uc2VzOiB7XG4gICAgICAgICAgICAnMjAwJzoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQm90IFBBVENIIHN1Y2Nlc3MgY291bnQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgJ2FwcGxpY2F0aW9uL2pzb24nOiB7IHNjaGVtYTogeyAneC10cy10eXBlJzogTnVtYmVyIH0gfSB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGFzeW5jIHVwZGF0ZUFsbChcbiAgICAgICAgQHJlcXVlc3RCb2R5KCkgZGF0YTogQm90LFxuICAgICAgICBAcGFyYW0ucXVlcnkub2JqZWN0KCd3aGVyZScsIGdldFdoZXJlU2NoZW1hRm9yKEJvdCkpIHdoZXJlOiBXaGVyZSA9IHt9LFxuICAgICk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIHRoaXMub3duZXJXaGVyZSh3aGVyZSlcbiAgICAgICAgY29uc3QgdXBkYXRlZENvdW50ID0gYXdhaXQgdGhpcy5ib3RSZXBvc2l0b3J5LnVwZGF0ZUFsbChkYXRhLCB3aGVyZSk7XG4gICAgICAgIHJldHVybiB1cGRhdGVkQ291bnQuY291bnRcbiAgICB9XG5cbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5JU19BVVRIRU5USUNBVEVEKVxuICAgIEBnZXQoJy9ib3RzL3tpZH0nLCB7XG4gICAgICAgIHJlc3BvbnNlczoge1xuICAgICAgICAgICAgJzIwMCc6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JvdCBtb2RlbCBpbnN0YW5jZScsXG4gICAgICAgICAgICAgICAgY29udGVudDogeyAnYXBwbGljYXRpb24vanNvbic6IHsgc2NoZW1hOiB7ICd4LXRzLXR5cGUnOiBCb3QgfSB9IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgYXN5bmMgZmluZEJ5SWQoQHBhcmFtLnBhdGgubnVtYmVyKCdpZCcpIGlkOiBudW1iZXIpOiBQcm9taXNlPEJvdD4ge1xuICAgICAgICB0aGlzLmNoZWNrT3duZXIodGhpcy5ib3RSZXBvc2l0b3J5LCBpZCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmJvdFJlcG9zaXRvcnkuZmluZEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIEBzZWN1cmVkKFNlY3VyZWRUeXBlLklTX0FVVEhFTlRJQ0FURUQpXG4gICAgQHBhdGNoKCcvYm90cy97aWR9Jywge1xuICAgICAgICByZXNwb25zZXM6IHtcbiAgICAgICAgICAgICcyMDQnOiB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCb3QgUEFUQ0ggc3VjY2VzcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0pXG4gICAgYXN5bmMgdXBkYXRlQnlJZChcbiAgICAgICAgQHBhcmFtLnBhdGgubnVtYmVyKCdpZCcpIGlkOiBudW1iZXIsXG4gICAgICAgIEByZXF1ZXN0Qm9keSgpIGRhdGE6IEJvdCxcbiAgICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5jaGVja093bmVyKHRoaXMuYm90UmVwb3NpdG9yeSwgaWQpO1xuICAgICAgICBhd2FpdCB0aGlzLmJvdFJlcG9zaXRvcnkudXBkYXRlQnlJZChpZCwgZGF0YSk7XG4gICAgfVxuXG4gICAgQHNlY3VyZWQoU2VjdXJlZFR5cGUuSVNfQVVUSEVOVElDQVRFRClcbiAgICBAZGVsKCcvdG9kb3Mve2lkfScsIHtcbiAgICAgICAgcmVzcG9uc2VzOiB7XG4gICAgICAgICAgICAnMjA0Jzoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQm90IERFTEVURSBzdWNjZXNzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBhc3luYyBkZWxldGVCeUlkKEBwYXJhbS5wYXRoLm51bWJlcignaWQnKSBpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuY2hlY2tPd25lcih0aGlzLmJvdFJlcG9zaXRvcnksIGlkKTtcbiAgICAgICAgYXdhaXQgdGhpcy5ib3RSZXBvc2l0b3J5LmRlbGV0ZUJ5SWQoaWQpO1xuICAgIH1cblxuICAgIEBzZWN1cmVkKFNlY3VyZWRUeXBlLklTX0FVVEhFTlRJQ0FURUQpXG4gICAgQHBvc3QoJy90b2Rvcy97aWR9L3N0b3AnLCB7XG4gICAgICAgIHJlc3BvbnNlczoge1xuICAgICAgICAgICAgJzIwNCc6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JvdCBzdG9wIHN1Y2Nlc3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGFzeW5jIHN0b3BCeUlkKEBwYXJhbS5wYXRoLm51bWJlcignaWQnKSBpZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuY2hlY2tPd25lcih0aGlzLmJvdFJlcG9zaXRvcnksIGlkKTtcbiAgICAgICAgYXdhaXQgdGhpcy5ib3RSZXBvc2l0b3J5LnVwZGF0ZUJ5SWQoaWQsIHsgYWN0aXZlOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBAc2VjdXJlZChTZWN1cmVkVHlwZS5JU19BVVRIRU5USUNBVEVEKVxuICAgIEBwb3N0KCcvdG9kb3Mve2lkfS9zdGFydCcsIHtcbiAgICAgICAgcmVzcG9uc2VzOiB7XG4gICAgICAgICAgICAnMjA0Jzoge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQm90IHN0YXJ0IHN1Y2Nlc3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIGFzeW5jIHN0YXJ0QnlJZChAcGFyYW0ucGF0aC5udW1iZXIoJ2lkJykgaWQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLmNoZWNrT3duZXIodGhpcy5ib3RSZXBvc2l0b3J5LCBpZCk7XG4gICAgICAgIGNvbnN0IGJvdCA9IHRoaXMuYm90UmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG4gICAgICAgIGF3YWl0IHRoaXMuYm90UmVwb3NpdG9yeS51cGRhdGVCeUlkKGlkLCB7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICB9XG5cbn1cbiJdfQ==