import { get, param } from '@loopback/rest';
import { BotRepository } from "../repositories";
import { repository } from '@loopback/repository';
import { secured, SecuredType, MyAuthActionProvider } from "../../telegram-authorization";
import { Bot } from '../models';
import { AuthenticationBindings, AuthenticateFn, UserProfile } from '@loopback/authentication';
import { inject } from '@loopback/core';

export class BotController {
    constructor(
        @repository(BotRepository) private botRepository: BotRepository,
        @inject(AuthenticationBindings.CURRENT_USER) private currentUser: UserProfile
    ) {
    }
    @get('pingmy/{id}')
    @secured(SecuredType.IS_AUTHENTICATED)
    ping(@param.path.string('id') id: string) {
        console.log(this.currentUser)
        return { success: 's' }
    }
}
