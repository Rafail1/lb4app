import { Component, ProviderMap, Binding } from '@loopback/core';
import { BotRepository } from "./repositories";
import { ControllerClass } from "@loopback/core/src/application";
export declare class TelegramBotComponent implements Component {
    providers?: ProviderMap;
    controllers?: ControllerClass[];
    repositories: BotRepository[];
    bindings?: Binding[];
    constructor();
}
