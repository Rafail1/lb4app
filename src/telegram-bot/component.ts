import {Component, ProviderMap, Binding} from '@loopback/core';
import {BotRepository} from "./repositories";
import {BotController} from "./controllers";
import {ControllerClass} from "@loopback/core/src/application";


export class TelegramBotComponent implements Component {
    providers?: ProviderMap;
    controllers?: ControllerClass[];
    repositories: BotRepository[];
    bindings?: Binding[];

    constructor() {
        this.bindings = [new Binding('repositories.BotRepository').toClass(BotRepository)];
        this.controllers = [BotController];
    }
}