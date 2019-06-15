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
let IBlock = class IBlock extends repository_1.Entity {
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
], IBlock.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], IBlock.prototype, "title", void 0);
IBlock = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], IBlock);
exports.IBlock = IBlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaS1ibG9jay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvaS1ibG9jay5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUE2RDtBQUc3RCxJQUFhLE1BQU0sR0FBbkIsTUFBYSxNQUFPLFNBQVEsbUJBQU07SUFjaEMsWUFBWSxJQUFzQjtRQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQVpDO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDVCxDQUFDOztrQ0FDVTtBQU1aO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDOztxQ0FDWTtBQVhILE1BQU07SUFEbEIsa0JBQUssRUFBRTs7R0FDSyxNQUFNLENBaUJsQjtBQWpCWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW50aXR5LCBtb2RlbCwgcHJvcGVydHl9IGZyb20gJ0Bsb29wYmFjay9yZXBvc2l0b3J5JztcblxuQG1vZGVsKClcbmV4cG9ydCBjbGFzcyBJQmxvY2sgZXh0ZW5kcyBFbnRpdHkge1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGlkOiB0cnVlLFxuICB9KVxuICBpZD86IHN0cmluZztcblxuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9KVxuICB0aXRsZTogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8SUJsb2NrPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=