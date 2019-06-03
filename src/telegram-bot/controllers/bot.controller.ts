import { get, param, post, requestBody, HttpErrors } from '@loopback/rest';
import { BotRepository } from "../repositories";
import { repository, Filter } from '@loopback/repository';
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

    @get('/bots')
    @secured(SecuredType.IS_AUTHENTICATED)
    async getBots(@param.query.object('filter') filter: Filter = {}) {
        this.makeFilter(filter)
        console.log(filter);
        return await this.botRepository.find(filter)
    }

    @get('pingmy/{id}')
    @secured(SecuredType.IS_AUTHENTICATED)
    async ping(@param.path.string('id') id: string) {
        await this.checkOwner(this.botRepository, id)
        return { success: 's' }
    }
}
