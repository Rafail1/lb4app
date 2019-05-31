import {get} from '@loopback/rest';
import {BotRepository} from "../repositories";
import {repository} from '@loopback/repository';
import {secured, SecuredType} from "../../telegram-authorization";

export class BotController {
    constructor(
        @repository (BotRepository) private botRepository: BotRepository
    ) {
    }
    @get('pingmy')
    @secured(SecuredType.IS_AUTHENTICATED)
    ping() {
        console.log('fff');
        return {success: 's'}
    }

}
