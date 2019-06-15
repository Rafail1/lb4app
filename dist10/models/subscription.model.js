"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const category_model_1 = require("./category.model");
let Subscription = class Subscription extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
    }),
    __metadata("design:type", String)
], Subscription.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], Subscription.prototype, "clientId", void 0);
__decorate([
    repository_1.belongsTo(() => category_model_1.Category),
    __metadata("design:type", String)
], Subscription.prototype, "categoryId", void 0);
Subscription = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Subscription);
exports.Subscription = Subscription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9zdWJzY3JpcHRpb24ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBMEU7QUFDMUUscURBQTRDO0FBRzVDLElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQWEsU0FBUSxtQkFBTTtJQWdCdEMsWUFBWSxJQUE0QjtRQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQWRDO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDVCxDQUFDOzt3Q0FDVTtBQU1aO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOzs4Q0FDZTtBQUdqQjtJQURDLHNCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQVEsQ0FBQzs7Z0RBQ1I7QUFkUCxZQUFZO0lBRHhCLGtCQUFLLEVBQUU7O0dBQ0ssWUFBWSxDQW1CeEI7QUFuQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIG1vZGVsLCBwcm9wZXJ0eSwgYmVsb25nc1RvIH0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5Lm1vZGVsJztcblxuQG1vZGVsKClcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gZXh0ZW5kcyBFbnRpdHkge1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGlkOiB0cnVlLFxuICB9KVxuICBpZD86IHN0cmluZztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdudW1iZXInLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9KVxuICBjbGllbnRJZDogbnVtYmVyO1xuXG4gIEBiZWxvbmdzVG8oKCkgPT4gQ2F0ZWdvcnkpXG4gIGNhdGVnb3J5SWQ6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFN1YnNjcmlwdGlvbj4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19