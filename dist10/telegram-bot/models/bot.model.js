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
const models_1 = require("../../models");
let Bot = class Bot extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    __metadata("design:type", Number)
], Bot.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Bot.prototype, "apiKey", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Bot.prototype, "first_name", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Bot.prototype, "username", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Bot.prototype, "active", void 0);
__decorate([
    repository_1.property({
        type: 'string'
    }),
    __metadata("design:type", String)
], Bot.prototype, "remoteAddr", void 0);
__decorate([
    repository_1.belongsTo(() => models_1.User),
    __metadata("design:type", Number)
], Bot.prototype, "userId", void 0);
Bot = __decorate([
    repository_1.model({ settings: {} }),
    __metadata("design:paramtypes", [Object])
], Bot);
exports.Bot = Bot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3RlbGVncmFtLWJvdC9tb2RlbHMvYm90Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHlDQUFvQztBQUdwQyxJQUFhLEdBQUcsR0FBaEIsTUFBYSxHQUFJLFNBQVEsbUJBQU07SUFxQzNCLFlBQVksSUFBbUI7UUFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDSixDQUFBO0FBbkNHO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDWCxDQUFDOzsrQkFDVTtBQU1aO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLElBQUk7S0FDakIsQ0FBQzs7bUNBQ2E7QUFLZjtJQUhDLHFCQUFRLENBQUM7UUFDTixJQUFJLEVBQUUsUUFBUTtLQUNqQixDQUFDOzt1Q0FDa0I7QUFLcEI7SUFIQyxxQkFBUSxDQUFDO1FBQ04sSUFBSSxFQUFFLFFBQVE7S0FDakIsQ0FBQzs7cUNBQ2dCO0FBS2xCO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLEtBQUs7S0FDakIsQ0FBQzs7bUNBQ2U7QUFLakI7SUFIQyxxQkFBUSxDQUFDO1FBQ04sSUFBSSxFQUFFLFFBQVE7S0FDakIsQ0FBQzs7dUNBQ2tCO0FBSXBCO0lBREMsc0JBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFJLENBQUM7O21DQUNQO0FBbkNOLEdBQUc7SUFEZixrQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDOztHQUNYLEdBQUcsQ0F3Q2Y7QUF4Q1ksa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIG1vZGVsLCBwcm9wZXJ0eSwgYmVsb25nc1RvIH0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcblxuQG1vZGVsKHsgc2V0dGluZ3M6IHt9IH0pXG5leHBvcnQgY2xhc3MgQm90IGV4dGVuZHMgRW50aXR5IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgfSlcbiAgICBpZD86IG51bWJlcjtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9KVxuICAgIGFwaUtleTogc3RyaW5nO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9KVxuICAgIGZpcnN0X25hbWU/OiBzdHJpbmc7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0pXG4gICAgdXNlcm5hbWU/OiBzdHJpbmc7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICB9KVxuICAgIGFjdGl2ZT86IGJvb2xlYW47XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgIH0pXG4gICAgcmVtb3RlQWRkcj86IHN0cmluZztcblxuXG4gICAgQGJlbG9uZ3NUbygoKSA9PiBVc2VyKVxuICAgIHVzZXJJZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8Qm90Pikge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG59XG4iXX0=