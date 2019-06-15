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
const repositories_1 = require("../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
let UserController = class UserController {
    constructor(userRepository, userRoleRepository) {
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
    }
    async authenticate(user) {
        if (!this.userRepository.checkUser(user)) {
            throw new rest_1.HttpErrors.BadRequest('Bad User');
        }
        const existUser = await this.userRepository.findOne({ where: { id: user.id } });
        if (existUser) {
            delete user.hash;
            await this.userRepository.updateById(existUser.id, user);
            const roles = await this.userRoleRepository.find({ where: { userId: user.id } });
            const { first_name, photo_url, last_name, username } = user;
            return {
                token: existUser.hash,
                first_name, last_name, photo_url, username,
                roles: roles.map(r => r.roleId)
            };
        }
        else {
            this.userRepository.create(user).then((createdUser) => {
                const { first_name, photo_url, last_name, username } = createdUser;
                return {
                    token: createdUser.hash,
                    first_name, last_name, photo_url, username,
                    roles: []
                };
            }, error => {
                console.error(error);
                throw new rest_1.HttpErrors.BadRequest('Bad User');
            });
        }
        return;
    }
    async loginByHash(credentials) {
        console.log(credentials.hash);
        const user = await this.userRepository.findOne({ where: { hash: credentials.hash } });
        if (!user)
            throw new rest_1.HttpErrors.Unauthorized('Invalid credentials');
        const roles = await this.userRoleRepository.find({ where: { userId: user.id } });
        const { first_name, photo_url, last_name, username } = user;
        return {
            token: credentials.hash,
            first_name, last_name, photo_url, username,
            roles: roles.map(r => r.roleId)
        };
    }
};
__decorate([
    rest_1.post('/users/authenticate'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "authenticate", null);
__decorate([
    rest_1.post('/users/authenticateByHash'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginByHash", null);
UserController = __decorate([
    __param(0, repository_1.repository(repositories_1.UserRepository)),
    __param(1, repository_1.repository(repositories_1.UserRoleRepository)),
    __metadata("design:paramtypes", [repositories_1.UserRepository,
        repositories_1.UserRoleRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUE2RDtBQUM3RCxrREFBbUU7QUFDbkUscURBQWdEO0FBQ2hELHNDQUErQjtBQUcvQixJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQ3ZCLFlBQ3dDLGNBQThCLEVBQzFCLGtCQUFzQztRQUQxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDMUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUVsRixDQUFDO0lBSUQsS0FBSyxDQUFDLFlBQVksQ0FBZ0IsSUFBVTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdEMsTUFBTSxJQUFJLGlCQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksU0FBUyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQztZQUM3RSxNQUFNLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDLEdBQUcsSUFBSSxDQUFDO1lBQzFELE9BQU87Z0JBQ0gsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJO2dCQUNyQixVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRO2dCQUMxQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDbEMsQ0FBQztTQUNMO2FBQU07WUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFpQixFQUFFLEVBQUU7Z0JBQ3hELE1BQU0sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsR0FBRyxXQUFXLENBQUM7Z0JBQ2pFLE9BQU87b0JBQ0gsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJO29CQUN2QixVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRO29CQUMxQyxLQUFLLEVBQUUsRUFBRTtpQkFDWixDQUFDO1lBQ04sQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sSUFBSSxpQkFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsQ0FBQTtTQUNMO1FBQ0QsT0FBTztJQUNYLENBQUM7SUFHRCxLQUFLLENBQUMsV0FBVyxDQUFnQixXQUF3QjtRQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLElBQUk7WUFBRSxNQUFNLElBQUksaUJBQVUsQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNwRSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBRTFELE9BQU87WUFDSCxLQUFLLEVBQUUsV0FBVyxDQUFDLElBQUk7WUFDdkIsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsUUFBUTtZQUMxQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDbEMsQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFBO0FBN0NHO0lBREMsV0FBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ1IsV0FBQSxrQkFBVyxFQUFFLENBQUE7O3FDQUFPLGFBQUk7O2tEQTZCM0M7QUFHRDtJQURDLFdBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUNmLFdBQUEsa0JBQVcsRUFBRSxDQUFBOzs7O2lEQVkvQjtBQXJEUSxjQUFjO0lBRWxCLFdBQUEsdUJBQVUsQ0FBQyw2QkFBYyxDQUFDLENBQUE7SUFDMUIsV0FBQSx1QkFBVSxDQUFDLGlDQUFrQixDQUFDLENBQUE7cUNBRHFCLDZCQUFjO1FBQ04saUNBQWtCO0dBSHpFLGNBQWMsQ0FzRDFCO0FBdERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwb3N0LCByZXF1ZXN0Qm9keSwgSHR0cEVycm9yc30gZnJvbSAnQGxvb3BiYWNrL3Jlc3QnO1xuaW1wb3J0IHtVc2VyUmVwb3NpdG9yeSwgVXNlclJvbGVSZXBvc2l0b3J5fSBmcm9tICcuLi9yZXBvc2l0b3JpZXMnO1xuaW1wb3J0IHtyZXBvc2l0b3J5fSBmcm9tICdAbG9vcGJhY2svcmVwb3NpdG9yeSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7Q3JlZGVudGlhbHN9IGZyb20gXCIuLi90ZWxlZ3JhbS1hdXRob3JpemF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIEByZXBvc2l0b3J5KFVzZXJSZXBvc2l0b3J5KSBwcml2YXRlIHVzZXJSZXBvc2l0b3J5OiBVc2VyUmVwb3NpdG9yeSxcbiAgICAgICAgQHJlcG9zaXRvcnkoVXNlclJvbGVSZXBvc2l0b3J5KSBwcml2YXRlIHVzZXJSb2xlUmVwb3NpdG9yeTogVXNlclJvbGVSZXBvc2l0b3J5LFxuICAgICkge1xuICAgIH1cblxuXG4gICAgQHBvc3QoJy91c2Vycy9hdXRoZW50aWNhdGUnKVxuICAgIGFzeW5jIGF1dGhlbnRpY2F0ZShAcmVxdWVzdEJvZHkoKSB1c2VyOiBVc2VyKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyUmVwb3NpdG9yeS5jaGVja1VzZXIodXNlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBIdHRwRXJyb3JzLkJhZFJlcXVlc3QoJ0JhZCBVc2VyJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXhpc3RVc2VyID0gYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS5maW5kT25lKHt3aGVyZToge2lkOiB1c2VyLmlkfX0pO1xuICAgICAgICBpZiAoZXhpc3RVc2VyKSB7XG4gICAgICAgICAgICBkZWxldGUgdXNlci5oYXNoO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy51c2VyUmVwb3NpdG9yeS51cGRhdGVCeUlkKGV4aXN0VXNlci5pZCwgdXNlcik7XG4gICAgICAgICAgICBjb25zdCByb2xlcyA9IGF3YWl0IHRoaXMudXNlclJvbGVSZXBvc2l0b3J5LmZpbmQoe3doZXJlOiB7dXNlcklkOiB1c2VyLmlkfX0pO1xuICAgICAgICAgICAgY29uc3Qge2ZpcnN0X25hbWUsIHBob3RvX3VybCwgbGFzdF9uYW1lLCB1c2VybmFtZX0gPSB1c2VyO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b2tlbjogZXhpc3RVc2VyLmhhc2gsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwaG90b191cmwsIHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHJvbGVzOiByb2xlcy5tYXAociA9PiByLnJvbGVJZClcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJSZXBvc2l0b3J5LmNyZWF0ZSh1c2VyKS50aGVuKChjcmVhdGVkVXNlcjogVXNlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHtmaXJzdF9uYW1lLCBwaG90b191cmwsIGxhc3RfbmFtZSwgdXNlcm5hbWV9ID0gY3JlYXRlZFVzZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IGNyZWF0ZWRVc2VyLmhhc2gsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsIGxhc3RfbmFtZSwgcGhvdG9fdXJsLCB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcm9sZXM6IFtdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSHR0cEVycm9ycy5CYWRSZXF1ZXN0KCdCYWQgVXNlcicpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgQHBvc3QoJy91c2Vycy9hdXRoZW50aWNhdGVCeUhhc2gnKVxuICAgIGFzeW5jIGxvZ2luQnlIYXNoKEByZXF1ZXN0Qm9keSgpIGNyZWRlbnRpYWxzOiBDcmVkZW50aWFscykge1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVkZW50aWFscy5oYXNoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7d2hlcmU6IHtoYXNoOiBjcmVkZW50aWFscy5oYXNofX0pO1xuICAgICAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBIdHRwRXJyb3JzLlVuYXV0aG9yaXplZCgnSW52YWxpZCBjcmVkZW50aWFscycpO1xuICAgICAgICBjb25zdCByb2xlcyA9IGF3YWl0IHRoaXMudXNlclJvbGVSZXBvc2l0b3J5LmZpbmQoe3doZXJlOiB7dXNlcklkOiB1c2VyLmlkfX0pO1xuICAgICAgICBjb25zdCB7Zmlyc3RfbmFtZSwgcGhvdG9fdXJsLCBsYXN0X25hbWUsIHVzZXJuYW1lfSA9IHVzZXI7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRva2VuOiBjcmVkZW50aWFscy5oYXNoLFxuICAgICAgICAgICAgZmlyc3RfbmFtZSwgbGFzdF9uYW1lLCBwaG90b191cmwsIHVzZXJuYW1lLFxuICAgICAgICAgICAgcm9sZXM6IHJvbGVzLm1hcChyID0+IHIucm9sZUlkKVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==