import { get, param, post, requestBody } from '@loopback/rest';
import { BotRepository } from "../repositories";
import { repository } from '@loopback/repository';
import { secured, SecuredType, MyAuthActionProvider } from "../../telegram-authorization";
import { Bot } from '../models';
import { AuthenticationBindings, AuthenticateFn, UserProfile } from '@loopback/authentication';
import { inject } from '@loopback/core';
import { OwnerMixin } from '../../mixins/owner.mixin';
import { User } from '../../models';

export class BotController extends OwnerMixin {
    constructor(
        @repository(BotRepository) private botRepository: BotRepository,
        @inject(AuthenticationBindings.CURRENT_USER) protected currentUser: User
    ) {
        super(currentUser)
    }

    @post('create-bot')
    @secured(SecuredType.IS_AUTHENTICATED)
    async createBot(@requestBody() bot: Bot) {
        bot.userId = this.currentUser.id!;
        const newBot = await this.botRepository.create(bot)
        return newBot
    }

    @get('pingmy/{id}')
    @secured(SecuredType.IS_AUTHENTICATED)
    async ping(@param.path.string('id') id: string) {
        await this.checkOwner(this.botRepository, id)
        return { success: 's' }
    }
}
