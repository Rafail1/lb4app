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
const models_1 = require("../telegram-bot/models");
let File = class File extends repository_1.Entity {
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
], File.prototype, "id", void 0);
__decorate([
    repository_1.belongsTo(() => models_1.Bot),
    __metadata("design:type", String)
], File.prototype, "botId", void 0);
File = __decorate([
    repository_1.model(),
    __metadata("design:paramtypes", [Object])
], File);
exports.File = File;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvZmlsZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUEwRTtBQUMxRSxtREFBNkM7QUFHN0MsSUFBYSxJQUFJLEdBQWpCLE1BQWEsSUFBSyxTQUFRLG1CQUFNO0lBVTlCLFlBQVksSUFBb0I7UUFDOUIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUFSQztJQUpDLHFCQUFRLENBQUM7UUFDUixJQUFJLEVBQUUsUUFBUTtRQUNkLEVBQUUsRUFBRSxJQUFJO0tBQ1QsQ0FBQzs7Z0NBQ1U7QUFHWjtJQURDLHNCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBRyxDQUFDOzttQ0FDUjtBQVJGLElBQUk7SUFEaEIsa0JBQUssRUFBRTs7R0FDSyxJQUFJLENBYWhCO0FBYlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIG1vZGVsLCBwcm9wZXJ0eSwgYmVsb25nc1RvIH0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuaW1wb3J0IHsgQm90IH0gZnJvbSAnLi4vdGVsZWdyYW0tYm90L21vZGVscyc7XG5cbkBtb2RlbCgpXG5leHBvcnQgY2xhc3MgRmlsZSBleHRlbmRzIEVudGl0eSB7XG4gIEBwcm9wZXJ0eSh7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgaWQ6IHRydWUsXG4gIH0pXG4gIGlkPzogc3RyaW5nO1xuXG4gIEBiZWxvbmdzVG8oKCkgPT4gQm90KVxuICBib3RJZDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8RmlsZT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19