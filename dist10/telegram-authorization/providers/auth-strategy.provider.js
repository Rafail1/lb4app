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
const context_1 = require("@loopback/context");
const CustomStrategy = require('passport-custom');
const authentication_1 = require("@loopback/authentication");
const repositories_1 = require("../../repositories");
const dist_1 = require("@loopback/rest/dist");
const permission_key_1 = require("../permission-key");
let MyAuthStrategyProvider = class MyAuthStrategyProvider {
    constructor(metadata, userRepository, userRoleRepository) {
        this.metadata = metadata;
        this.userRepository = userRepository;
        this.userRoleRepository = userRoleRepository;
    }
    value() {
        if (!this.metadata)
            return;
        return new CustomStrategy((payload, done) => {
            const hash = payload.headers.authorization || '';
            const id = payload.url || '';
            this.verifyToken({ hash, id }, done);
        });
    }
    async verifyToken(payload, done) {
        try {
            const { hash, id } = payload;
            const user = await this.userRepository.findOne({ where: { hash } });
            if (!user)
                return done(null, false);
            const { type, model } = this.metadata;
            if (type === permission_key_1.SecuredType.OWNER) {
                await this.verifyOwner(user, id, model);
            }
            else {
                await this.verifyRoles(user);
            }
            done(null, user);
        }
        catch (err) {
            if (err.name === 'UnauthorizedError')
                done(null, false);
            done(err, false);
        }
    }
    async verifyOwner(user, id, model) {
        console.log(model);
    }
    async verifyRoles(user) {
        const { type, roles } = this.metadata;
        if ([permission_key_1.SecuredType.IS_AUTHENTICATED, permission_key_1.SecuredType.PERMIT_ALL].includes(type))
            return;
        console.log(type, permission_key_1.SecuredType.HAS_ROLES);
        if (type === permission_key_1.SecuredType.HAS_ANY_ROLE) {
            if (!roles.length)
                return;
            const { count } = await this.userRoleRepository.count({
                userId: user.id,
                roleId: { inq: roles },
            });
            if (count)
                return;
        }
        else if (type === permission_key_1.SecuredType.HAS_ROLES && roles.length) {
            const userRoles = await this.userRoleRepository.find({ where: { userId: user.id } });
            const roleIds = userRoles.map(ur => ur.roleId);
            let valid = true;
            for (const role of roles)
                if (!roleIds.includes(role)) {
                    valid = false;
                    break;
                }
            if (valid)
                return;
        }
        throw new dist_1.HttpErrors.Unauthorized('Invalid authorization');
    }
};
MyAuthStrategyProvider = __decorate([
    __param(0, context_1.inject(authentication_1.AuthenticationBindings.METADATA)),
    __param(1, context_1.inject('repositories.UserRepository')),
    __param(2, context_1.inject('repositories.UserRoleRepository')),
    __metadata("design:paramtypes", [Object, repositories_1.UserRepository,
        repositories_1.UserRoleRepository])
], MyAuthStrategyProvider);
exports.MyAuthStrategyProvider = MyAuthStrategyProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdHJhdGVneS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZWxlZ3JhbS1hdXRob3JpemF0aW9uL3Byb3ZpZGVycy9hdXRoLXN0cmF0ZWd5LnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXFFO0FBR3JFLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2xELDZEQUFrRTtBQUNsRSxxREFBd0U7QUFDeEUsOENBQWlEO0FBR2pELHNEQUFnRDtBQUloRCxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUMvQixZQUNxRCxRQUFrQyxFQUNwQyxjQUE4QixFQUMxQixrQkFBc0M7UUFGeEMsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzFCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDekYsQ0FBQztJQUVMLEtBQUs7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzNCLE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxPQUF3QixFQUFFLElBQXFFLEVBQUUsRUFBRTtZQUMxSCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7WUFDakQsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVyxDQUNiLE9BQW9CLEVBQ3BCLElBQXFFO1FBRXJFLElBQUk7WUFDQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQztZQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxJQUFJO2dCQUFFLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNwQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdEMsSUFBSSxJQUFJLEtBQUssNEJBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzVCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztZQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDcEI7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBVSxFQUFFLEVBQVUsRUFBRSxLQUFtQjtRQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxLQUFLLENBQUMsV0FBVyxDQUFDLElBQVU7UUFDeEIsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXRDLElBQUksQ0FBQyw0QkFBVyxDQUFDLGdCQUFnQixFQUFFLDRCQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUFFLE9BQU87UUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsNEJBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxJQUFJLElBQUksS0FBSyw0QkFBVyxDQUFDLFlBQVksRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUMxQixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO2dCQUNsRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ2YsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTthQUN6QixDQUFDLENBQUM7WUFFSCxJQUFJLEtBQUs7Z0JBQUUsT0FBTztTQUNyQjthQUFNLElBQUksSUFBSSxLQUFLLDRCQUFXLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDdkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckYsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLO2dCQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekIsS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDZCxNQUFNO2lCQUNUO1lBRUwsSUFBSSxLQUFLO2dCQUFFLE9BQU87U0FDckI7UUFFRCxNQUFNLElBQUksaUJBQVUsQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0osQ0FBQTtBQXJFWSxzQkFBc0I7SUFFMUIsV0FBQSxnQkFBTSxDQUFDLHVDQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZDLFdBQUEsZ0JBQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO0lBQ3JDLFdBQUEsZ0JBQU0sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBOzZDQURxQiw2QkFBYztRQUNOLGlDQUFrQjtHQUpwRixzQkFBc0IsQ0FxRWxDO0FBckVZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgUHJvdmlkZXIsIFZhbHVlT3JQcm9taXNlIH0gZnJvbSBcIkBsb29wYmFjay9jb250ZXh0XCI7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gXCJwYXNzcG9ydFwiO1xuXG5jb25zdCBDdXN0b21TdHJhdGVneSA9IHJlcXVpcmUoJ3Bhc3Nwb3J0LWN1c3RvbScpO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25CaW5kaW5ncyB9IGZyb20gXCJAbG9vcGJhY2svYXV0aGVudGljYXRpb25cIjtcbmltcG9ydCB7IFVzZXJSZXBvc2l0b3J5LCBVc2VyUm9sZVJlcG9zaXRvcnkgfSBmcm9tIFwiLi4vLi4vcmVwb3NpdG9yaWVzXCI7XG5pbXBvcnQgeyBIdHRwRXJyb3JzIH0gZnJvbSBcIkBsb29wYmFjay9yZXN0L2Rpc3RcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UgfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgU2VjdXJlZFR5cGUgfSBmcm9tIFwiLi4vcGVybWlzc2lvbi1rZXlcIjtcbmltcG9ydCB7IENyZWRlbnRpYWxzLCBNeUF1dGhlbnRpY2F0aW9uTWV0YWRhdGEgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFBlcnNpc3RhYmxlIH0gZnJvbSBcIkBsb29wYmFjay9yZXBvc2l0b3J5XCI7XG5cbmV4cG9ydCBjbGFzcyBNeUF1dGhTdHJhdGVneVByb3ZpZGVyIGltcGxlbWVudHMgUHJvdmlkZXI8U3RyYXRlZ3kgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQGluamVjdChBdXRoZW50aWNhdGlvbkJpbmRpbmdzLk1FVEFEQVRBKSBwcml2YXRlIG1ldGFkYXRhOiBNeUF1dGhlbnRpY2F0aW9uTWV0YWRhdGEsXG4gICAgICAgIEBpbmplY3QoJ3JlcG9zaXRvcmllcy5Vc2VyUmVwb3NpdG9yeScpIHByaXZhdGUgdXNlclJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5LFxuICAgICAgICBAaW5qZWN0KCdyZXBvc2l0b3JpZXMuVXNlclJvbGVSZXBvc2l0b3J5JykgcHJpdmF0ZSB1c2VyUm9sZVJlcG9zaXRvcnk6IFVzZXJSb2xlUmVwb3NpdG9yeSxcbiAgICApIHsgfVxuXG4gICAgdmFsdWUoKTogVmFsdWVPclByb21pc2U8U3RyYXRlZ3kgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgaWYgKCF0aGlzLm1ldGFkYXRhKSByZXR1cm47XG4gICAgICAgIHJldHVybiBuZXcgQ3VzdG9tU3RyYXRlZ3koKHBheWxvYWQ6IEluY29taW5nTWVzc2FnZSwgZG9uZTogKGVycjogRXJyb3IgfCBudWxsLCB1c2VyPzogVXNlciB8IGZhbHNlLCBpbmZvPzogT2JqZWN0KSA9PiB2b2lkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYXNoID0gcGF5bG9hZC5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHBheWxvYWQudXJsIHx8ICcnO1xuICAgICAgICAgICAgdGhpcy52ZXJpZnlUb2tlbih7IGhhc2gsIGlkIH0sIGRvbmUpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYXN5bmMgdmVyaWZ5VG9rZW4oXG4gICAgICAgIHBheWxvYWQ6IENyZWRlbnRpYWxzLFxuICAgICAgICBkb25lOiAoZXJyOiBFcnJvciB8IG51bGwsIHVzZXI/OiBVc2VyIHwgZmFsc2UsIGluZm8/OiBPYmplY3QpID0+IHZvaWQsXG4gICAgKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGhhc2gsIGlkIH0gPSBwYXlsb2FkO1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclJlcG9zaXRvcnkuZmluZE9uZSh7IHdoZXJlOiB7IGhhc2ggfSB9KTtcbiAgICAgICAgICAgIGlmICghdXNlcikgcmV0dXJuIGRvbmUobnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgY29uc3QgeyB0eXBlLCBtb2RlbCB9ID0gdGhpcy5tZXRhZGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSBTZWN1cmVkVHlwZS5PV05FUikge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudmVyaWZ5T3duZXIodXNlciwgaWQsIG1vZGVsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy52ZXJpZnlSb2xlcyh1c2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvbmUobnVsbCwgdXNlcik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgaWYgKGVyci5uYW1lID09PSAnVW5hdXRob3JpemVkRXJyb3InKSBkb25lKG51bGwsIGZhbHNlKTtcbiAgICAgICAgICAgIGRvbmUoZXJyLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhc3luYyB2ZXJpZnlPd25lcih1c2VyOiBVc2VyLCBpZDogc3RyaW5nLCBtb2RlbD86IFBlcnNpc3RhYmxlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcbiAgICB9XG4gICAgYXN5bmMgdmVyaWZ5Um9sZXModXNlcjogVXNlcikge1xuICAgICAgICBjb25zdCB7IHR5cGUsIHJvbGVzIH0gPSB0aGlzLm1ldGFkYXRhO1xuXG4gICAgICAgIGlmIChbU2VjdXJlZFR5cGUuSVNfQVVUSEVOVElDQVRFRCwgU2VjdXJlZFR5cGUuUEVSTUlUX0FMTF0uaW5jbHVkZXModHlwZSkpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5sb2codHlwZSwgU2VjdXJlZFR5cGUuSEFTX1JPTEVTKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IFNlY3VyZWRUeXBlLkhBU19BTllfUk9MRSkge1xuICAgICAgICAgICAgaWYgKCFyb2xlcy5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHsgY291bnQgfSA9IGF3YWl0IHRoaXMudXNlclJvbGVSZXBvc2l0b3J5LmNvdW50KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgcm9sZUlkOiB7IGlucTogcm9sZXMgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY291bnQpIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBTZWN1cmVkVHlwZS5IQVNfUk9MRVMgJiYgcm9sZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyUm9sZXMgPSBhd2FpdCB0aGlzLnVzZXJSb2xlUmVwb3NpdG9yeS5maW5kKHsgd2hlcmU6IHsgdXNlcklkOiB1c2VyLmlkIH0gfSk7XG4gICAgICAgICAgICBjb25zdCByb2xlSWRzID0gdXNlclJvbGVzLm1hcCh1ciA9PiB1ci5yb2xlSWQpO1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgcm9sZSBvZiByb2xlcylcbiAgICAgICAgICAgICAgICBpZiAoIXJvbGVJZHMuaW5jbHVkZXMocm9sZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWQpIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBIdHRwRXJyb3JzLlVuYXV0aG9yaXplZCgnSW52YWxpZCBhdXRob3JpemF0aW9uJyk7XG4gICAgfVxufVxuIl19