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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const models_1 = require("../models");
let Owner = class Owner {
    constructor(currentUser) {
        this.currentUser = currentUser;
    }
    ownerWhere(where) {
        Object.assign(where, { userId: this.currentUser.id });
    }
    ownerFilter(filter) {
        Object.assign(filter, { where: { userId: this.currentUser.id } });
    }
    async checkOwner(repository, id) {
        const cnt = await repository.count({ id: id, userId: this.currentUser.id });
        if (!cnt.count) {
            throw new rest_1.HttpErrors.Unauthorized('Only owner can do it');
        }
    }
};
Owner = __decorate([
    __param(0, core_1.inject(authentication_1.AuthenticationBindings.CURRENT_USER)),
    __metadata("design:paramtypes", [models_1.User])
], Owner);
exports.Owner = Owner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY3VzdG9tL293bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTRDO0FBQzVDLDZEQUFrRTtBQUNsRSx5Q0FBd0M7QUFDeEMsc0NBQWlDO0FBR2pDLElBQWEsS0FBSyxHQUFsQixNQUFhLEtBQUs7SUFDaEIsWUFBbUUsV0FBaUI7UUFBakIsZ0JBQVcsR0FBWCxXQUFXLENBQU07SUFFcEYsQ0FBQztJQUNELFVBQVUsQ0FBQyxLQUFZO1FBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0QsV0FBVyxDQUFDLE1BQWM7UUFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELEtBQUssQ0FBQyxVQUFVLENBQUMsVUFBZSxFQUFFLEVBQU87UUFDdkMsTUFBTSxHQUFHLEdBQUcsTUFBTSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1lBQ2QsTUFBTSxJQUFJLGlCQUFVLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxLQUFLO0lBQ0gsV0FBQSxhQUFNLENBQUMsdUNBQXNCLENBQUMsWUFBWSxDQUFDLENBQUE7cUNBQXdCLGFBQUk7R0FEekUsS0FBSyxDQWdCakI7QUFoQlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3JzIH0gZnJvbSBcIkBsb29wYmFjay9yZXN0XCI7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkJpbmRpbmdzIH0gZnJvbSBcIkBsb29wYmFjay9hdXRoZW50aWNhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcIkBsb29wYmFjay9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IHsgRmlsdGVyLCBXaGVyZSB9IGZyb20gXCJAbG9vcGJhY2svcmVwb3NpdG9yeVwiO1xuXG5leHBvcnQgY2xhc3MgT3duZXIge1xuICBjb25zdHJ1Y3RvcihAaW5qZWN0KEF1dGhlbnRpY2F0aW9uQmluZGluZ3MuQ1VSUkVOVF9VU0VSKSBwcm90ZWN0ZWQgY3VycmVudFVzZXI6IFVzZXIpIHtcblxuICB9XG4gIG93bmVyV2hlcmUod2hlcmU6IFdoZXJlKSB7XG4gICAgT2JqZWN0LmFzc2lnbih3aGVyZSwgeyB1c2VySWQ6IHRoaXMuY3VycmVudFVzZXIuaWQgfSk7XG4gIH1cbiAgb3duZXJGaWx0ZXIoZmlsdGVyOiBGaWx0ZXIpIHtcbiAgICBPYmplY3QuYXNzaWduKGZpbHRlciwgeyB3aGVyZTogeyB1c2VySWQ6IHRoaXMuY3VycmVudFVzZXIuaWQgfSB9KTtcbiAgfVxuICBhc3luYyBjaGVja093bmVyKHJlcG9zaXRvcnk6IGFueSwgaWQ6IGFueSkge1xuICAgIGNvbnN0IGNudCA9IGF3YWl0IHJlcG9zaXRvcnkuY291bnQoeyBpZDogaWQsIHVzZXJJZDogdGhpcy5jdXJyZW50VXNlci5pZCB9KTtcbiAgICBpZiAoIWNudC5jb3VudCkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFcnJvcnMuVW5hdXRob3JpemVkKCdPbmx5IG93bmVyIGNhbiBkbyBpdCcpO1xuICAgIH1cbiAgfVxufVxuIl19