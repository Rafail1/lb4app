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
var Category_1;
"use strict";
const repository_1 = require("@loopback/repository");
const i_block_model_1 = require("./i-block.model");
const models_1 = require("../telegram-bot/models");
let Category = Category_1 = class Category extends repository_1.Entity {
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
], Category.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: true,
    }),
    __metadata("design:type", Boolean)
], Category.prototype, "active", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Category.prototype, "title", void 0);
__decorate([
    repository_1.belongsTo(() => i_block_model_1.IBlock),
    __metadata("design:type", String)
], Category.prototype, "iblockId", void 0);
__decorate([
    repository_1.belongsTo(() => Category_1),
    __metadata("design:type", String)
], Category.prototype, "parentId", void 0);
__decorate([
    repository_1.belongsTo(() => models_1.Bot),
    __metadata("design:type", String)
], Category.prototype, "botId", void 0);
Category = Category_1 = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Category);
exports.Category = Category;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kZWxzL2NhdGVnb3J5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBbUY7QUFDbkYsbURBQXlDO0FBQ3pDLG1EQUE2QztBQUc3QyxJQUFhLFFBQVEsZ0JBQXJCLE1BQWEsUUFBUyxTQUFRLG1CQUFNO0lBNkJsQyxZQUFZLElBQXdCO1FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBO0FBMUJDO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDVCxDQUFDOztvQ0FDVTtBQU1aO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxTQUFTO1FBQ2YsT0FBTyxFQUFFLElBQUk7S0FDZCxDQUFDOzt3Q0FDZTtBQU1qQjtJQUpDLHFCQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQzs7dUNBQ1k7QUFHZDtJQURDLHNCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQU0sQ0FBQzs7MENBQ1A7QUFHakI7SUFEQyxzQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVEsQ0FBQzs7MENBQ1Q7QUFHakI7SUFEQyxzQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQUcsQ0FBQzs7dUNBQ1A7QUEzQkgsUUFBUTtJQURwQixrQkFBSyxFQUFFOztHQUNLLFFBQVEsQ0FnQ3BCO0FBaENZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBtb2RlbCwgcHJvcGVydHksIGJlbG9uZ3NUbywgaGFzTWFueSB9IGZyb20gJ0Bsb29wYmFjay9yZXBvc2l0b3J5JztcbmltcG9ydCB7IElCbG9jayB9IGZyb20gJy4vaS1ibG9jay5tb2RlbCc7XG5pbXBvcnQgeyBCb3QgfSBmcm9tICcuLi90ZWxlZ3JhbS1ib3QvbW9kZWxzJztcblxuQG1vZGVsKClcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIEVudGl0eSB7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBpZDogdHJ1ZSxcbiAgfSlcbiAgaWQ/OiBzdHJpbmc7XG5cbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdHJ1ZSxcbiAgfSlcbiAgYWN0aXZlPzogYm9vbGVhbjtcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9KVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIEBiZWxvbmdzVG8oKCkgPT4gSUJsb2NrKVxuICBpYmxvY2tJZDogc3RyaW5nO1xuXG4gIEBiZWxvbmdzVG8oKCkgPT4gQ2F0ZWdvcnkpXG4gIHBhcmVudElkOiBzdHJpbmc7XG5cbiAgQGJlbG9uZ3NUbygoKSA9PiBCb3QpXG4gIGJvdElkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8Q2F0ZWdvcnk+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cbiJdfQ==