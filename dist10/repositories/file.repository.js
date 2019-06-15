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
let FileRepository = class FileRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.File, dataSource);
    }
};
FileRepository = __decorate([
    __param(0, core_1.inject('datasources.mongo')),
    __metadata("design:paramtypes", [datasources_1.MongoDataSource])
], FileRepository);
exports.FileRepository = FileRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlcG9zaXRvcmllcy9maWxlLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBMkQ7QUFDM0Qsc0NBQStCO0FBQy9CLGdEQUErQztBQUMvQyx5Q0FBc0M7QUFFdEMsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBZSxTQUFRLGtDQUduQztJQUNDLFlBQytCLFVBQTJCO1FBRXhELEtBQUssQ0FBQyxhQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7QUFUWSxjQUFjO0lBS3RCLFdBQUEsYUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUE7cUNBQWEsNkJBQWU7R0FML0MsY0FBYyxDQVMxQjtBQVRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEZWZhdWx0Q3J1ZFJlcG9zaXRvcnl9IGZyb20gJ0Bsb29wYmFjay9yZXBvc2l0b3J5JztcbmltcG9ydCB7RmlsZX0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7TW9uZ29EYXRhU291cmNlfSBmcm9tICcuLi9kYXRhc291cmNlcyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnQGxvb3BiYWNrL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgRmlsZVJlcG9zaXRvcnkgZXh0ZW5kcyBEZWZhdWx0Q3J1ZFJlcG9zaXRvcnk8XG4gIEZpbGUsXG4gIHR5cGVvZiBGaWxlLnByb3RvdHlwZS5pZFxuPiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoJ2RhdGFzb3VyY2VzLm1vbmdvJykgZGF0YVNvdXJjZTogTW9uZ29EYXRhU291cmNlLFxuICApIHtcbiAgICBzdXBlcihGaWxlLCBkYXRhU291cmNlKTtcbiAgfVxufVxuIl19