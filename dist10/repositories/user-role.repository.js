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
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let UserRoleRepository = class UserRoleRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.UserRole, dataSource);
    }
};
UserRoleRepository = __decorate([
    __param(0, core_1.inject('datasources.mongo')),
    __metadata("design:paramtypes", [datasources_1.MongoDataSource])
], UserRoleRepository);
exports.UserRoleRepository = UserRoleRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yb2xlLnJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3NpdG9yaWVzL3VzZXItcm9sZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQTJEO0FBQzNELHNDQUFtQztBQUNuQyxnREFBK0M7QUFDL0MseUNBQXNDO0FBRXRDLElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQW1CLFNBQVEsa0NBR3ZDO0lBQ0MsWUFDK0IsVUFBMkI7UUFFeEQsS0FBSyxDQUFDLGlCQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGLENBQUE7QUFUWSxrQkFBa0I7SUFLMUIsV0FBQSxhQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtxQ0FBYSw2QkFBZTtHQUwvQyxrQkFBa0IsQ0FTOUI7QUFUWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlZmF1bHRDcnVkUmVwb3NpdG9yeX0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuaW1wb3J0IHtVc2VyUm9sZX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7TW9uZ29EYXRhU291cmNlfSBmcm9tICcuLi9kYXRhc291cmNlcyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnQGxvb3BiYWNrL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgVXNlclJvbGVSZXBvc2l0b3J5IGV4dGVuZHMgRGVmYXVsdENydWRSZXBvc2l0b3J5PFxuICBVc2VyUm9sZSxcbiAgdHlwZW9mIFVzZXJSb2xlLnByb3RvdHlwZS5pZFxuPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoJ2RhdGFzb3VyY2VzLm1vbmdvJykgZGF0YVNvdXJjZTogTW9uZ29EYXRhU291cmNlLFxuICApIHtcbiAgICBzdXBlcihVc2VyUm9sZSwgZGF0YVNvdXJjZSk7XG4gIH1cbn1cbiJdfQ==