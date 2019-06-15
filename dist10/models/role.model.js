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
let Role = class Role extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true
    }),
    __metadata("design:type", String)
], Role.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Role.prototype, "description", void 0);
Role = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], Role);
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvcm9sZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUE2RDtBQUc3RCxJQUFhLElBQUksR0FBakIsTUFBYSxJQUFLLFNBQVEsbUJBQU07SUFhOUIsWUFBWSxJQUFvQjtRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDZCxDQUFDO0NBQ0YsQ0FBQTtBQVhDO0lBSkMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsRUFBRSxFQUFFLElBQUk7S0FDVCxDQUFDOztnQ0FDVTtBQUtaO0lBSEMscUJBQVEsQ0FBQztRQUNSLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQzs7eUNBQ21CO0FBVlYsSUFBSTtJQURoQixrQkFBSyxFQUFFOztHQUNLLElBQUksQ0FnQmhCO0FBaEJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHksIG1vZGVsLCBwcm9wZXJ0eX0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuXG5AbW9kZWwoKVxuZXhwb3J0IGNsYXNzIFJvbGUgZXh0ZW5kcyBFbnRpdHkge1xuICBAcHJvcGVydHkoe1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGlkOiB0cnVlXG4gIH0pXG4gIGlkPzogc3RyaW5nO1xuXG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gIH0pXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8Um9sZT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19