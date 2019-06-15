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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RlbGVncmFtLWJvdC9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBK0Q7QUFDL0QsaURBQTZDO0FBQzdDLCtDQUE0QztBQUk1QyxNQUFhLG9CQUFvQjtJQU03QjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLGNBQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw0QkFBYSxDQUFDLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsMkJBQWEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDSjtBQVZELG9EQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFByb3ZpZGVyTWFwLCBCaW5kaW5nfSBmcm9tICdAbG9vcGJhY2svY29yZSc7XG5pbXBvcnQge0JvdFJlcG9zaXRvcnl9IGZyb20gXCIuL3JlcG9zaXRvcmllc1wiO1xuaW1wb3J0IHtCb3RDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyc1wiO1xuaW1wb3J0IHtDb250cm9sbGVyQ2xhc3N9IGZyb20gXCJAbG9vcGJhY2svY29yZS9zcmMvYXBwbGljYXRpb25cIjtcblxuXG5leHBvcnQgY2xhc3MgVGVsZWdyYW1Cb3RDb21wb25lbnQgaW1wbGVtZW50cyBDb21wb25lbnQge1xuICAgIHByb3ZpZGVycz86IFByb3ZpZGVyTWFwO1xuICAgIGNvbnRyb2xsZXJzPzogQ29udHJvbGxlckNsYXNzW107XG4gICAgcmVwb3NpdG9yaWVzOiBCb3RSZXBvc2l0b3J5W107XG4gICAgYmluZGluZ3M/OiBCaW5kaW5nW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IFtuZXcgQmluZGluZygncmVwb3NpdG9yaWVzLkJvdFJlcG9zaXRvcnknKS50b0NsYXNzKEJvdFJlcG9zaXRvcnkpXTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IFtCb3RDb250cm9sbGVyXTtcbiAgICB9XG59Il19