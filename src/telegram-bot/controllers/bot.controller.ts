import { get, param, post, requestBody, HttpErrors, getFilterSchemaFor, patch, getWhereSchemaFor, del } from '@loopback/rest';
import { BotRepository } from "../repositories";
import { repository, Filter, Where } from '@loopback/repository';
import { secured, SecuredType, MyAuthActionProvider } from "../../telegram-authorization";
import { Bot } from '../models';
import { AuthenticationBindings, AuthenticateFn, UserProfile } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { User } from '../../models';
import { Owner } from '../../custom/owner';

export class BotController extends Owner {
    constructor(
        @repository(BotRepository) private botRepository: BotRepository,
        @inject(AuthenticationBindings.CURRENT_USER) protected currentUser: User
    ) {
        super(currentUser)
    }

    @post('/bots')
    @secured(SecuredType.IS_AUTHENTICATED)
    async createBot(@requestBody({ required: true }) bot: Bot) {
        bot.userId = this.currentUser.id!;
        try {
            return await this.botRepository.create(bot)
        } catch (e) {
            console.log(e)
            return e
        }
    }

    @get('/bots', {
        responses: {
            '200': {
                description: 'Array of Bot model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': Bot } },
                    },
                },
            },
        },
    })
    @secured(SecuredType.IS_AUTHENTICATED)
    async getBots(@param.query.object('filter', getFilterSchemaFor(Bot)) filter: Filter = {}): Promise<Bot[]> {
        this.ownerFilter(filter)
        return await this.botRepository.find(filter)
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @patch('/bots', {
        responses: {
            '200': {
                description: 'Bot PATCH success count',
                content: { 'application/json': { schema: { 'x-ts-type': Number } } },
            },
        },
    })
    async updateAll(
        @requestBody() data: Bot,
        @param.query.object('where', getWhereSchemaFor(Bot)) where: Where = {},
    ): Promise<number> {
        this.ownerWhere(where)
        const updatedCount = await this.botRepository.updateAll(data, where);
        return updatedCount.count
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @get('/bots/{id}', {
        responses: {
            '200': {
                description: 'Bot model instance',
                content: { 'application/json': { schema: { 'x-ts-type': Bot } } },
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Bot> {
        this.checkOwner(this.botRepository, id);
        return await this.botRepository.findById(id);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @patch('/bots/{id}', {
        responses: {
            '204': {
                description: 'Bot PATCH success',
            },
        },
    })
    async updateById(
        @param.path.number('id') id: number,
        @requestBody() data: Bot,
    ): Promise<void> {
        this.checkOwner(this.botRepository, id);
        await this.botRepository.updateById(id, data);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @del('/todos/{id}', {
        responses: {
            '204': {
                description: 'Bot DELETE success',
            },
        },
    })
    async deleteById(@param.path.number('id') id: number): Promise<void> {
        this.checkOwner(this.botRepository, id);
        await this.botRepository.deleteById(id);
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @post('/todos/{id}/stop', {
        responses: {
            '204': {
                description: 'Bot stop success',
            },
        },
    })
    async stopById(@param.path.number('id') id: number): Promise<void> {
        this.checkOwner(this.botRepository, id);
        await this.botRepository.updateById(id, { active: false });
    }

    @secured(SecuredType.IS_AUTHENTICATED)
    @post('/todos/{id}/start', {
        responses: {
            '204': {
                description: 'Bot start success',
            },
        },
    })
    async startById(@param.path.number('id') id: number): Promise<void> {
        this.checkOwner(this.botRepository, id);
        const bot = this.botRepository.findById(id);
        await this.botRepository.updateById(id, { active: true });
    }

}
