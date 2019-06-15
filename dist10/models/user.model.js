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
let User = class User extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        required: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "auth_date", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], User.prototype, "hash", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "photo_url", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: false,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
User = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUE2RDtBQUc3RCxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsbUJBQU07SUEyQzVCLFlBQVksSUFBb0I7UUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDSixDQUFBO0FBekNHO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDWCxDQUFDOztnQ0FDVTtBQU1aO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLElBQUk7S0FDakIsQ0FBQzs7dUNBQ2dCO0FBTWxCO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLEtBQUs7S0FDbEIsQ0FBQzs7d0NBQ2tCO0FBTXBCO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLEtBQUs7S0FDbEIsQ0FBQzs7dUNBQ2lCO0FBTW5CO0lBSkMscUJBQVEsQ0FBQztRQUNOLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLElBQUk7S0FDakIsQ0FBQzs7a0NBQ1c7QUFNYjtJQUpDLHFCQUFRLENBQUM7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7O3VDQUNpQjtBQU1uQjtJQUpDLHFCQUFRLENBQUM7UUFDTixJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxLQUFLO0tBQ2xCLENBQUM7O3NDQUNnQjtBQXpDVCxJQUFJO0lBRGhCLGtCQUFLLEVBQUU7O0dBQ0ssSUFBSSxDQThDaEI7QUE5Q1ksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VudGl0eSwgbW9kZWwsIHByb3BlcnR5fSBmcm9tICdAbG9vcGJhY2svcmVwb3NpdG9yeSc7XG5cbkBtb2RlbCgpXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEVudGl0eSB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIGlkOiB0cnVlXG4gICAgfSlcbiAgICBpZD86IG51bWJlcjtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICB9KVxuICAgIGF1dGhfZGF0ZTogbnVtYmVyO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9KVxuICAgIGZpcnN0X25hbWU/OiBzdHJpbmc7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIH0pXG4gICAgbGFzdF9uYW1lPzogc3RyaW5nO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIH0pXG4gICAgaGFzaDogc3RyaW5nO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICB9KVxuICAgIHBob3RvX3VybD86IHN0cmluZztcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgfSlcbiAgICB1c2VybmFtZT86IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXI+KSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cbn1cbiJdfQ==