import { BotRepository } from "../repositories";
import { Filter, Where } from '@loopback/repository';
import { Bot } from '../models';
import { User } from '../../models';
import { Owner } from '../../custom/owner';
export declare class BotController extends Owner {
    private botRepository;
    protected currentUser: User;
    constructor(botRepository: BotRepository, currentUser: User);
    createBot(bot: Bot): Promise<any>;
    getBots(filter?: Filter): Promise<Bot[]>;
    updateAll(data: Bot, where?: Where): Promise<number>;
    findById(id: number): Promise<Bot>;
    updateById(id: number, data: Bot): Promise<void>;
    deleteById(id: number): Promise<void>;
    stopById(id: number): Promise<void>;
    startById(id: number): Promise<void>;
}
