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
const i_block_model_1 = require("./i-block.model");
let Item = class Item extends repository_1.Entity {
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
], Item.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: true,
    }),
    __metadata("design:type", Boolean)
], Item.prototype, "active", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Item.prototype, "title", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        default: 0,
    }),
    __metadata("design:type", Number)
], Item.prototype, "type", void 0);
__decorate([
    repository_1.property({
        type: 'number',
    }),
    __metadata("design:type", Number)
], Item.prototype, "price", void 0);
__decorate([
    repository_1.belongsTo(() => i_block_model_1.IBlock),
    __metadata("design:type", String)
], Item.prototype, "iblockId", void 0);
Item = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Item);
exports.Item = Item;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaXRlbS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUEwRTtBQUMxRSxtREFBeUM7QUFHekMsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLG1CQUFNO0lBaUM5QixZQUFZLElBQW9CO1FBQzlCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBO0FBL0JDO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDVCxDQUFDOztnQ0FDVTtBQU1aO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDOztvQ0FDZTtBQU1qQjtJQUpDLHFCQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7bUNBQ1k7QUFNZDtJQUpDLHFCQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQzs7a0NBQ1k7QUFLZDtJQUhDLHFCQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7O21DQUNhO0FBR2Y7SUFEQyxzQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFNLENBQUM7O3NDQUNSO0FBL0JMLElBQUk7SUFEaEIsa0JBQUssRUFBRTs7R0FDSyxJQUFJLENBb0NoQjtBQXBDWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgbW9kZWwsIHByb3BlcnR5LCBiZWxvbmdzVG8gfSBmcm9tICdAbG9vcGJhY2svcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJQmxvY2sgfSBmcm9tICcuL2ktYmxvY2subW9kZWwnO1xuXG5AbW9kZWwoKVxuZXhwb3J0IGNsYXNzIEl0ZW0gZXh0ZW5kcyBFbnRpdHkge1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGlkOiB0cnVlLFxuICB9KVxuICBpZD86IHN0cmluZztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB0cnVlLFxuICB9KVxuICBhY3RpdmU/OiBib29sZWFuO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0pXG4gIHRpdGxlOiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICBkZWZhdWx0OiAwLFxuICB9KVxuICB0eXBlPzogbnVtYmVyO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogJ251bWJlcicsXG4gIH0pXG4gIHByaWNlPzogbnVtYmVyO1xuXG4gIEBiZWxvbmdzVG8oKCkgPT4gSUJsb2NrKVxuICBpYmxvY2tJZDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8SXRlbT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19