"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const repositories_1 = require("./repositories");
const controllers_1 = require("./controllers");
class TelegramBotComponent {
    constructor() {
        this.bindings = [new core_1.Binding('repositories.BotRepository').toClass(repositories_1.BotRepository)];
        this.controllers = [controllers_1.BotController];
    }
}
exports.TelegramBotComponent = TelegramBotComponent;
//# sourceMappingURL=component.js.map