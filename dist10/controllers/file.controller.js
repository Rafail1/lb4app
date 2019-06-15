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
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const core_1 = require("@loopback/core");
const multer = require("multer");
let FileController = class FileController {
    constructor(fileRepository) {
        this.fileRepository = fileRepository;
        this.storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, '/tmp/my-uploads');
            },
            filename: function (req, file, cb) {
                cb(null, file.fieldname + '-' + Date.now());
            }
        });
    }
    async upload(request, response) {
        return new Promise((resolve, reject) => {
            resolve({ dara: "ok" });
        });
    }
    async create(file) {
        return await this.fileRepository.create(file);
    }
    async count(where) {
        return await this.fileRepository.count(where);
    }
    async find(filter) {
        return await this.fileRepository.find(filter);
    }
    async updateAll(file, where) {
        return await this.fileRepository.updateAll(file, where);
    }
    async findById(id) {
        return await this.fileRepository.findById(id);
    }
    async updateById(id, file) {
        await this.fileRepository.updateById(id, file);
    }
    async replaceById(id, file) {
        await this.fileRepository.replaceById(id, file);
    }
    async deleteById(id) {
        await this.fileRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/upload', {
        responses: {
            200: {
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                        },
                    },
                },
                description: '',
            },
        },
    }),
    __param(0, rest_1.requestBody({
        description: 'multipart/form-data value.',
        required: true,
        content: {
            'multipart/form-data': {
                'x-parser': 'stream',
                schema: { type: 'object' },
            },
        },
    })),
    __param(1, core_1.inject(rest_1.RestBindings.Http.RESPONSE)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "upload", null);
__decorate([
    rest_1.post('/files', {
        responses: {
            '200': {
                description: 'File model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.File } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.File]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "create", null);
__decorate([
    rest_1.get('/files/count', {
        responses: {
            '200': {
                description: 'File model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.File))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "count", null);
__decorate([
    rest_1.get('/files', {
        responses: {
            '200': {
                description: 'Array of File model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.File } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.File))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "find", null);
__decorate([
    rest_1.patch('/files', {
        responses: {
            '200': {
                description: 'File PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.File))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.File, Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/files/{id}', {
        responses: {
            '200': {
                description: 'File model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.File } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "findById", null);
__decorate([
    rest_1.patch('/files/{id}', {
        responses: {
            '204': {
                description: 'File PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.File]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "updateById", null);
__decorate([
    rest_1.put('/files/{id}', {
        responses: {
            '204': {
                description: 'File PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.File]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/files/{id}', {
        responses: {
            '204': {
                description: 'File DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "deleteById", null);
FileController = __decorate([
    __param(0, repository_1.repository(repositories_1.FileRepository)),
    __metadata("design:paramtypes", [repositories_1.FileRepository])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL2ZpbGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQU04QjtBQUM5Qix5Q0Fhd0I7QUFDeEIsc0NBQWlDO0FBQ2pDLGtEQUFpRDtBQUNqRCx5Q0FBd0M7QUFDeEMsaUNBQWtDO0FBRWxDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFekIsWUFFUyxjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ2hDLFdBQVcsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDbEMsRUFBRSxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFBO1lBQzdCLENBQUM7WUFDRCxRQUFRLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQy9CLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUE7WUFDN0MsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFnQkQsS0FBSyxDQUFDLE1BQU0sQ0FXVixPQUFnQixFQUNvQixRQUFrQjtRQUV0RCxPQUFPLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQVVELEtBQUssQ0FBQyxNQUFNLENBQWdCLElBQVU7UUFDcEMsT0FBTyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENB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QztJQUVDLFdBQUEsWUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsV0FBQSxrQkFBVyxFQUFFLENBQUE7OzZDQUFPLGFBQUk7O2dEQUcxQjtBQVNEO0lBUEMsVUFBRyxDQUFDLGFBQWEsRUFBRTtRQUNsQixTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLGtCQUFrQjthQUNoQztTQUNGO0tBQ0YsQ0FBQztJQUVDLFdBQUEsWUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsV0FBQSxrQkFBVyxFQUFFLENBQUE7OzZDQUFPLGFBQUk7O2lEQUcxQjtBQVNEO0lBUEMsVUFBRyxDQUFDLGFBQWEsRUFBRTtRQUNsQixTQUFTLEVBQUU7WUFDVCxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLHFCQUFxQjthQUNuQztTQUNGO0tBQ0YsQ0FBQztJQUNnQixXQUFBLFlBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBOzs7O2dEQUV4QztBQTdKVSxjQUFjO0lBR3RCLFdBQUEsdUJBQVUsQ0FBQyw2QkFBYyxDQUFDLENBQUE7cUNBQ0osNkJBQWM7R0FKNUIsY0FBYyxDQThKMUI7QUE5Slksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb3VudCxcbiAgQ291bnRTY2hlbWEsXG4gIEZpbHRlcixcbiAgcmVwb3NpdG9yeSxcbiAgV2hlcmUsXG59IGZyb20gJ0Bsb29wYmFjay9yZXBvc2l0b3J5JztcbmltcG9ydCB7XG4gIHBvc3QsXG4gIHBhcmFtLFxuICBnZXQsXG4gIGdldEZpbHRlclNjaGVtYUZvcixcbiAgZ2V0V2hlcmVTY2hlbWFGb3IsXG4gIHBhdGNoLFxuICBwdXQsXG4gIGRlbCxcbiAgcmVxdWVzdEJvZHksXG4gIFJlc3RCaW5kaW5ncyxcbiAgUmVxdWVzdCxcbiAgUmVzcG9uc2UsXG59IGZyb20gJ0Bsb29wYmFjay9yZXN0JztcbmltcG9ydCB7IEZpbGUgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgRmlsZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnQGxvb3BiYWNrL2NvcmUnO1xuaW1wb3J0IG11bHRlciA9IHJlcXVpcmUoJ211bHRlcicpO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3VybCc7XG5leHBvcnQgY2xhc3MgRmlsZUNvbnRyb2xsZXIge1xuICBzdG9yYWdlOiBtdWx0ZXIuU3RvcmFnZUVuZ2luZTtcbiAgY29uc3RydWN0b3IoXG4gICAgQHJlcG9zaXRvcnkoRmlsZVJlcG9zaXRvcnkpXG4gICAgcHVibGljIGZpbGVSZXBvc2l0b3J5OiBGaWxlUmVwb3NpdG9yeSxcbiAgKSB7XG4gICAgdGhpcy5zdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgICAgIGRlc3RpbmF0aW9uOiBmdW5jdGlvbiAocmVxLCBmaWxlLCBjYikge1xuICAgICAgICBjYihudWxsLCAnL3RtcC9teS11cGxvYWRzJylcbiAgICAgIH0sXG4gICAgICBmaWxlbmFtZTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICAgICAgY2IobnVsbCwgZmlsZS5maWVsZG5hbWUgKyAnLScgKyBEYXRlLm5vdygpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBAcG9zdCgnL3VwbG9hZCcsIHtcbiAgICByZXNwb25zZXM6IHtcbiAgICAgIDIwMDoge1xuICAgICAgICBjb250ZW50OiB7XG4gICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb24nOiB7XG4gICAgICAgICAgICBzY2hlbWE6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgYXN5bmMgdXBsb2FkKFxuICAgIEByZXF1ZXN0Qm9keSh7XG4gICAgICBkZXNjcmlwdGlvbjogJ211bHRpcGFydC9mb3JtLWRhdGEgdmFsdWUuJyxcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgY29udGVudDoge1xuICAgICAgICAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc6IHtcbiAgICAgICAgICAneC1wYXJzZXInOiAnc3RyZWFtJyxcbiAgICAgICAgICBzY2hlbWE6IHsgdHlwZTogJ29iamVjdCcgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSlcbiAgICByZXF1ZXN0OiBSZXF1ZXN0LFxuICAgIEBpbmplY3QoUmVzdEJpbmRpbmdzLkh0dHAuUkVTUE9OU0UpIHJlc3BvbnNlOiBSZXNwb25zZSxcbiAgKTogUHJvbWlzZTxPYmplY3Q+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8T2JqZWN0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICByZXNvbHZlKHsgZGFyYTogXCJva1wiIH0pXG4gICAgfSlcbiAgfVxuXG4gIEBwb3N0KCcvZmlsZXMnLCB7XG4gICAgcmVzcG9uc2VzOiB7XG4gICAgICAnMjAwJzoge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbGUgbW9kZWwgaW5zdGFuY2UnLFxuICAgICAgICBjb250ZW50OiB7ICdhcHBsaWNhdGlvbi9qc29uJzogeyBzY2hlbWE6IHsgJ3gtdHMtdHlwZSc6IEZpbGUgfSB9IH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIGFzeW5jIGNyZWF0ZShAcmVxdWVzdEJvZHkoKSBmaWxlOiBGaWxlKTogUHJvbWlzZTxGaWxlPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuZmlsZVJlcG9zaXRvcnkuY3JlYXRlKGZpbGUpO1xuICB9XG5cbiAgQGdldCgnL2ZpbGVzL2NvdW50Jywge1xuICAgIHJlc3BvbnNlczoge1xuICAgICAgJzIwMCc6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdGaWxlIG1vZGVsIGNvdW50JyxcbiAgICAgICAgY29udGVudDogeyAnYXBwbGljYXRpb24vanNvbic6IHsgc2NoZW1hOiBDb3VudFNjaGVtYSB9IH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIGFzeW5jIGNvdW50KFxuICAgIEBwYXJhbS5xdWVyeS5vYmplY3QoJ3doZXJlJywgZ2V0V2hlcmVTY2hlbWFGb3IoRmlsZSkpIHdoZXJlPzogV2hlcmUsXG4gICk6IFByb21pc2U8Q291bnQ+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5maWxlUmVwb3NpdG9yeS5jb3VudCh3aGVyZSk7XG4gIH1cblxuICBAZ2V0KCcvZmlsZXMnLCB7XG4gICAgcmVzcG9uc2VzOiB7XG4gICAgICAnMjAwJzoge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0FycmF5IG9mIEZpbGUgbW9kZWwgaW5zdGFuY2VzJyxcbiAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJzoge1xuICAgICAgICAgICAgc2NoZW1hOiB7IHR5cGU6ICdhcnJheScsIGl0ZW1zOiB7ICd4LXRzLXR5cGUnOiBGaWxlIH0gfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICBhc3luYyBmaW5kKFxuICAgIEBwYXJhbS5xdWVyeS5vYmplY3QoJ2ZpbHRlcicsIGdldEZpbHRlclNjaGVtYUZvcihGaWxlKSkgZmlsdGVyPzogRmlsdGVyLFxuICApOiBQcm9taXNlPEZpbGVbXT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbGVSZXBvc2l0b3J5LmZpbmQoZmlsdGVyKTtcbiAgfVxuXG4gIEBwYXRjaCgnL2ZpbGVzJywge1xuICAgIHJlc3BvbnNlczoge1xuICAgICAgJzIwMCc6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdGaWxlIFBBVENIIHN1Y2Nlc3MgY291bnQnLFxuICAgICAgICBjb250ZW50OiB7ICdhcHBsaWNhdGlvbi9qc29uJzogeyBzY2hlbWE6IENvdW50U2NoZW1hIH0gfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgYXN5bmMgdXBkYXRlQWxsKFxuICAgIEByZXF1ZXN0Qm9keSgpIGZpbGU6IEZpbGUsXG4gICAgQHBhcmFtLnF1ZXJ5Lm9iamVjdCgnd2hlcmUnLCBnZXRXaGVyZVNjaGVtYUZvcihGaWxlKSkgd2hlcmU/OiBXaGVyZSxcbiAgKTogUHJvbWlzZTxDb3VudD4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmZpbGVSZXBvc2l0b3J5LnVwZGF0ZUFsbChmaWxlLCB3aGVyZSk7XG4gIH1cblxuICBAZ2V0KCcvZmlsZXMve2lkfScsIHtcbiAgICByZXNwb25zZXM6IHtcbiAgICAgICcyMDAnOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmlsZSBtb2RlbCBpbnN0YW5jZScsXG4gICAgICAgIGNvbnRlbnQ6IHsgJ2FwcGxpY2F0aW9uL2pzb24nOiB7IHNjaGVtYTogeyAneC10cy10eXBlJzogRmlsZSB9IH0gfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbiAgYXN5bmMgZmluZEJ5SWQoQHBhcmFtLnBhdGguc3RyaW5nKCdpZCcpIGlkOiBzdHJpbmcpOiBQcm9taXNlPEZpbGU+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5maWxlUmVwb3NpdG9yeS5maW5kQnlJZChpZCk7XG4gIH1cblxuICBAcGF0Y2goJy9maWxlcy97aWR9Jywge1xuICAgIHJlc3BvbnNlczoge1xuICAgICAgJzIwNCc6IHtcbiAgICAgICAgZGVzY3JpcHRpb246ICdGaWxlIFBBVENIIHN1Y2Nlc3MnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICBhc3luYyB1cGRhdGVCeUlkKFxuICAgIEBwYXJhbS5wYXRoLnN0cmluZygnaWQnKSBpZDogc3RyaW5nLFxuICAgIEByZXF1ZXN0Qm9keSgpIGZpbGU6IEZpbGUsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZmlsZVJlcG9zaXRvcnkudXBkYXRlQnlJZChpZCwgZmlsZSk7XG4gIH1cblxuICBAcHV0KCcvZmlsZXMve2lkfScsIHtcbiAgICByZXNwb25zZXM6IHtcbiAgICAgICcyMDQnOiB7XG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRmlsZSBQVVQgc3VjY2VzcycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pXG4gIGFzeW5jIHJlcGxhY2VCeUlkKFxuICAgIEBwYXJhbS5wYXRoLnN0cmluZygnaWQnKSBpZDogc3RyaW5nLFxuICAgIEByZXF1ZXN0Qm9keSgpIGZpbGU6IEZpbGUsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZmlsZVJlcG9zaXRvcnkucmVwbGFjZUJ5SWQoaWQsIGZpbGUpO1xuICB9XG5cbiAgQGRlbCgnL2ZpbGVzL3tpZH0nLCB7XG4gICAgcmVzcG9uc2VzOiB7XG4gICAgICAnMjA0Jzoge1xuICAgICAgICBkZXNjcmlwdGlvbjogJ0ZpbGUgREVMRVRFIHN1Y2Nlc3MnLFxuICAgICAgfSxcbiAgICB9LFxuICB9KVxuICBhc3luYyBkZWxldGVCeUlkKEBwYXJhbS5wYXRoLnN0cmluZygnaWQnKSBpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5maWxlUmVwb3NpdG9yeS5kZWxldGVCeUlkKGlkKTtcbiAgfVxufVxuIl19