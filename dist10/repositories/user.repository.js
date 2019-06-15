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
const crypto = require("crypto");
let UserRepository = class UserRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.User, dataSource);
    }
    checkUser(user) {
        const checkHash = user.hash;
        let data_check_string = '';
        Object.keys(user).sort().forEach((key) => {
            if (key === 'hash')
                return;
            // @ts-ignore
            data_check_string += key + '=' + user[key] + '\n';
        });
        data_check_string = data_check_string.slice(0, data_check_string.length - 1);
        const secret_key = crypto.createHash('sha256').update('700198718:AAF9wDFELMBDNlIioQnoPrHq6XbbvAay5CA', 'utf8').digest();
        const hmac = crypto.createHmac('sha256', secret_key);
        const hmu = hmac.update(data_check_string);
        const hash = hmu.digest('hex');
        return hash === checkHash;
    }
};
UserRepository = __decorate([
    __param(0, core_1.inject('datasources.mongo')),
    __metadata("design:paramtypes", [datasources_1.MongoDataSource])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JlcG9zaXRvcmllcy91c2VyLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBMkQ7QUFDM0Qsc0NBQStCO0FBQy9CLGdEQUErQztBQUMvQyx5Q0FBc0M7QUFDdEMsaUNBQWlDO0FBRWpDLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWUsU0FBUSxrQ0FDUDtJQUN6QixZQUNpQyxVQUEyQjtRQUV4RCxLQUFLLENBQUMsYUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxTQUFTLENBQUMsSUFBVTtRQUNoQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDckMsSUFBRyxHQUFHLEtBQUssTUFBTTtnQkFBRSxPQUFPO1lBQzFCLGFBQWE7WUFDYixpQkFBaUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDSCxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQywrQ0FBK0MsRUFBRSxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4SCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNyRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0MsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksS0FBSyxTQUFTLENBQUM7SUFDOUIsQ0FBQztDQUVKLENBQUE7QUF2QlksY0FBYztJQUdsQixXQUFBLGFBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO3FDQUFhLDZCQUFlO0dBSG5ELGNBQWMsQ0F1QjFCO0FBdkJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEZWZhdWx0Q3J1ZFJlcG9zaXRvcnl9IGZyb20gJ0Bsb29wYmFjay9yZXBvc2l0b3J5JztcbmltcG9ydCB7VXNlcn0gZnJvbSAnLi4vbW9kZWxzJztcbmltcG9ydCB7TW9uZ29EYXRhU291cmNlfSBmcm9tICcuLi9kYXRhc291cmNlcyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnQGxvb3BiYWNrL2NvcmUnO1xuaW1wb3J0ICogYXMgY3J5cHRvIGZyb20gXCJjcnlwdG9cIjtcblxuZXhwb3J0IGNsYXNzIFVzZXJSZXBvc2l0b3J5IGV4dGVuZHMgRGVmYXVsdENydWRSZXBvc2l0b3J5PFVzZXIsXG4gICAgdHlwZW9mIFVzZXIucHJvdG90eXBlLmlkPiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEBpbmplY3QoJ2RhdGFzb3VyY2VzLm1vbmdvJykgZGF0YVNvdXJjZTogTW9uZ29EYXRhU291cmNlLFxuICAgICkge1xuICAgICAgICBzdXBlcihVc2VyLCBkYXRhU291cmNlKTtcbiAgICB9XG4gICAgY2hlY2tVc2VyKHVzZXI6IFVzZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgY2hlY2tIYXNoID0gdXNlci5oYXNoO1xuICAgICAgICBsZXQgZGF0YV9jaGVja19zdHJpbmcgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXModXNlcikuc29ydCgpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYoa2V5ID09PSAnaGFzaCcpIHJldHVybjtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGRhdGFfY2hlY2tfc3RyaW5nICs9IGtleSArICc9JyArIHVzZXJba2V5XSArICdcXG4nO1xuICAgICAgICB9KTtcbiAgICAgICAgZGF0YV9jaGVja19zdHJpbmcgPSBkYXRhX2NoZWNrX3N0cmluZy5zbGljZSgwLCBkYXRhX2NoZWNrX3N0cmluZy5sZW5ndGggLSAxKTtcbiAgICAgICAgY29uc3Qgc2VjcmV0X2tleSA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoJzcwMDE5ODcxODpBQUY5d0RGRUxNQkRObElpb1Fub1BySHE2WGJidkFheTVDQScsICd1dGY4JykuZGlnZXN0KCk7XG4gICAgICAgIGNvbnN0IGhtYWMgPSBjcnlwdG8uY3JlYXRlSG1hYygnc2hhMjU2Jywgc2VjcmV0X2tleSk7XG4gICAgICAgIGNvbnN0IGhtdSA9IGhtYWMudXBkYXRlKGRhdGFfY2hlY2tfc3RyaW5nKTtcbiAgICAgICAgY29uc3QgaGFzaCA9IGhtdS5kaWdlc3QoJ2hleCcpO1xuICAgICAgICByZXR1cm4gaGFzaCA9PT0gY2hlY2tIYXNoO1xuICAgIH1cblxufVxuIl19