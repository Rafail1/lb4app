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
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = require("./mongo.datasource.json");
let MongoDataSource = class MongoDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongoDataSource.dataSourceName = 'mongo';
MongoDataSource = __decorate([
    __param(0, core_1.inject('datasources.config.mongo', { optional: true })),
    __metadata("design:paramtypes", [Object])
], MongoDataSource);
exports.MongoDataSource = MongoDataSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhc291cmNlcy9tb25nby5kYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXNDO0FBQ3RDLHFEQUE2QztBQUM3QyxrREFBa0Q7QUFFbEQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZ0IsU0FBUSxvQkFBTyxDQUFDLFVBQVU7SUFHckQsWUFFRSxXQUFtQixNQUFNO1FBRXpCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0YsQ0FBQTtBQVJRLDhCQUFjLEdBQUcsT0FBTyxDQUFDO0FBRHJCLGVBQWU7SUFJdkIsV0FBQSxhQUFNLENBQUMsMEJBQTBCLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQTs7R0FKNUMsZUFBZSxDQVMzQjtBQVRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ0Bsb29wYmFjay9jb3JlJztcbmltcG9ydCB7anVnZ2xlcn0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vbW9uZ28uZGF0YXNvdXJjZS5qc29uJztcblxuZXhwb3J0IGNsYXNzIE1vbmdvRGF0YVNvdXJjZSBleHRlbmRzIGp1Z2dsZXIuRGF0YVNvdXJjZSB7XG4gIHN0YXRpYyBkYXRhU291cmNlTmFtZSA9ICdtb25nbyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdCgnZGF0YXNvdXJjZXMuY29uZmlnLm1vbmdvJywge29wdGlvbmFsOiB0cnVlfSlcbiAgICBkc0NvbmZpZzogb2JqZWN0ID0gY29uZmlnLFxuICApIHtcbiAgICBzdXBlcihkc0NvbmZpZyk7XG4gIH1cbn1cbiJdfQ==