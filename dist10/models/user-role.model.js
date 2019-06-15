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
const user_model_1 = require("./user.model");
const role_model_1 = require("./role.model");
let UserRole = class UserRole extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true
    }),
    __metadata("design:type", String)
], UserRole.prototype, "id", void 0);
__decorate([
    repository_1.belongsTo(() => user_model_1.User),
    __metadata("design:type", Number)
], UserRole.prototype, "userId", void 0);
__decorate([
    repository_1.belongsTo(() => role_model_1.Role),
    __metadata("design:type", String)
], UserRole.prototype, "roleId", void 0);
UserRole = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], UserRole);
exports.UserRole = UserRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yb2xlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy91c2VyLXJvbGUubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBd0U7QUFDeEUsNkNBQWtDO0FBQ2xDLDZDQUFrQztBQUdsQyxJQUFhLFFBQVEsR0FBckIsTUFBYSxRQUFTLFNBQVEsbUJBQU07SUFjbEMsWUFBWSxJQUF3QjtRQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQVhDO0lBTEMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7UUFDUixTQUFTLEVBQUMsSUFBSTtLQUNmLENBQUM7O29DQUNVO0FBR1o7SUFEQyxzQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFJLENBQUM7O3dDQUNQO0FBR2Y7SUFEQyxzQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFJLENBQUM7O3dDQUNQO0FBWkosUUFBUTtJQURwQixrQkFBSyxFQUFFOztHQUNLLFFBQVEsQ0FpQnBCO0FBakJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiZWxvbmdzVG8sIEVudGl0eSwgbW9kZWwsIHByb3BlcnR5fSBmcm9tICdAbG9vcGJhY2svcmVwb3NpdG9yeSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7Um9sZX0gZnJvbSBcIi4vcm9sZS5tb2RlbFwiO1xuXG5AbW9kZWwoKVxuZXhwb3J0IGNsYXNzIFVzZXJSb2xlIGV4dGVuZHMgRW50aXR5IHtcbiAgQHByb3BlcnR5KHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBpZDogdHJ1ZSxcbiAgICBnZW5lcmF0ZWQ6dHJ1ZVxuICB9KVxuICBpZD86IHN0cmluZztcblxuICBAYmVsb25nc1RvKCgpID0+IFVzZXIpXG4gIHVzZXJJZDogbnVtYmVyO1xuXG4gIEBiZWxvbmdzVG8oKCkgPT4gUm9sZSlcbiAgcm9sZUlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlclJvbGU+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cbiJdfQ==