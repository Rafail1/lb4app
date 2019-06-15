"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path = require("path");
const sequence_1 = require("./sequence");
const repositories_1 = require("./repositories");
const telegram_authorization_1 = require("./telegram-authorization");
const telegram_bot_1 = require("./telegram-bot");
class KerzachiApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        this.static('/', path.join(__dirname, '../public'));
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(telegram_authorization_1.TelegramAuthorizationComponent);
        this.component(telegram_bot_1.TelegramBotComponent);
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        this.bind('repositories.UserRepository').toClass(repositories_1.UserRepository);
        this.bind('repositories.UserRoleRepository').toClass(repositories_1.UserRoleRepository);
        this.bind('repositories.RoleRepository').toClass(repositories_1.RoleRepository);
        this.sequence(sequence_1.MySequence);
    }
    async start() {
        await super.start();
        // this.init(this.getSync('repositories.UserRepository'),
        //     this.getSync('repositories.UserRoleRepository'),
        //     this.getSync('repositories.RoleRepository')
        //     );
    }
    init(userRepository, userRoleRepository, roleRepository) {
        userRepository.create({
            auth_date: 1558614982,
            first_name: "Telega",
            hash: "f97dd5eebc002249f3babf43d8e1485eb676d67f3297937ddfbc3e3643aca94f",
            id: 453964513,
            last_name: "Eletag",
            photo_url: "https://t.me/i/userpic/320/eletag.jpg",
            username: "eletag"
        }).then((user) => {
            roleRepository.create({ id: 'ADMIN', description: "admin" }).then((role) => {
                userRoleRepository.create({ userId: user.id, roleId: role.id }).then((success) => {
                    console.log(success);
                });
            });
        }, error => {
            return;
        });
    }
}
exports.KerzachiApplication = KerzachiApplication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBeUM7QUFFekMsMkRBR2lDO0FBQ2pDLHFEQUFzRDtBQUN0RCx5Q0FBK0M7QUFDL0MsMkRBQXFEO0FBQ3JELDZCQUE2QjtBQUM3Qix5Q0FBc0M7QUFDdEMsaURBQWtGO0FBRWxGLHFFQUF3RTtBQUN4RSxpREFBb0Q7QUFDcEQsTUFBYSxtQkFBb0IsU0FBUSxnQkFBUyxDQUM5Qyw0QkFBWSxDQUFDLDRCQUFlLENBQUMsc0JBQWUsQ0FBQyxDQUFDLENBQ2pEO0lBQ0csWUFBWSxVQUE2QixFQUFFO1FBQ3ZDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxvQ0FBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEMsSUFBSSxFQUFFLFdBQVc7U0FDcEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1REFBOEIsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsbUNBQW9CLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLHFDQUFxQixDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBYyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQ0FBa0IsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxPQUFPLENBQUMsNkJBQWMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQVUsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBSztRQUNQLE1BQU0sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BCLHlEQUF5RDtRQUN6RCx1REFBdUQ7UUFDdkQsa0RBQWtEO1FBQ2xELFNBQVM7SUFDYixDQUFDO0lBRUQsSUFBSSxDQUFDLGNBQTZCLEVBQUUsa0JBQXFDLEVBQUUsY0FBNkI7UUFFcEcsY0FBYyxDQUFDLE1BQU0sQ0FBQztZQUNsQixTQUFTLEVBQUUsVUFBVTtZQUNyQixVQUFVLEVBQUUsUUFBUTtZQUNwQixJQUFJLEVBQUUsa0VBQWtFO1lBQ3hFLEVBQUUsRUFBRSxTQUFTO1lBQ2IsU0FBUyxFQUFFLFFBQVE7WUFDbkIsU0FBUyxFQUFFLHVDQUF1QztZQUNsRCxRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDbEIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BFLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtvQkFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNQLE9BQU87UUFDWCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDSjtBQWxERCxrREFrREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jvb3RNaXhpbn0gZnJvbSAnQGxvb3BiYWNrL2Jvb3QnO1xuaW1wb3J0IHtBcHBsaWNhdGlvbkNvbmZpZ30gZnJvbSAnQGxvb3BiYWNrL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBSZXN0RXhwbG9yZXJCaW5kaW5ncyxcbiAgICBSZXN0RXhwbG9yZXJDb21wb25lbnQsXG59IGZyb20gJ0Bsb29wYmFjay9yZXN0LWV4cGxvcmVyJztcbmltcG9ydCB7IFJlcG9zaXRvcnlNaXhpbn0gZnJvbSAnQGxvb3BiYWNrL3JlcG9zaXRvcnknO1xuaW1wb3J0IHtSZXN0QXBwbGljYXRpb259IGZyb20gJ0Bsb29wYmFjay9yZXN0JztcbmltcG9ydCB7U2VydmljZU1peGlufSBmcm9tICdAbG9vcGJhY2svc2VydmljZS1wcm94eSc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtNeVNlcXVlbmNlfSBmcm9tICcuL3NlcXVlbmNlJztcbmltcG9ydCB7VXNlclJlcG9zaXRvcnksIFVzZXJSb2xlUmVwb3NpdG9yeSwgUm9sZVJlcG9zaXRvcnl9IGZyb20gJy4vcmVwb3NpdG9yaWVzJztcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vbW9kZWxzXCI7XG5pbXBvcnQge1RlbGVncmFtQXV0aG9yaXphdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vdGVsZWdyYW0tYXV0aG9yaXphdGlvblwiO1xuaW1wb3J0IHtUZWxlZ3JhbUJvdENvbXBvbmVudH0gZnJvbSBcIi4vdGVsZWdyYW0tYm90XCI7XG5leHBvcnQgY2xhc3MgS2VyemFjaGlBcHBsaWNhdGlvbiBleHRlbmRzIEJvb3RNaXhpbihcbiAgICBTZXJ2aWNlTWl4aW4oUmVwb3NpdG9yeU1peGluKFJlc3RBcHBsaWNhdGlvbikpLFxuKSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogQXBwbGljYXRpb25Db25maWcgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zdGF0aWMoJy8nLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljJykpO1xuICAgICAgICB0aGlzLmJpbmQoUmVzdEV4cGxvcmVyQmluZGluZ3MuQ09ORklHKS50byh7XG4gICAgICAgICAgICBwYXRoOiAnL2V4cGxvcmVyJyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50KFRlbGVncmFtQXV0aG9yaXphdGlvbkNvbXBvbmVudCk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50KFRlbGVncmFtQm90Q29tcG9uZW50KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnQoUmVzdEV4cGxvcmVyQ29tcG9uZW50KTtcblxuICAgICAgICB0aGlzLnByb2plY3RSb290ID0gX19kaXJuYW1lO1xuXG4gICAgICAgIHRoaXMuYmluZCgncmVwb3NpdG9yaWVzLlVzZXJSZXBvc2l0b3J5JykudG9DbGFzcyhVc2VyUmVwb3NpdG9yeSk7XG4gICAgICAgIHRoaXMuYmluZCgncmVwb3NpdG9yaWVzLlVzZXJSb2xlUmVwb3NpdG9yeScpLnRvQ2xhc3MoVXNlclJvbGVSZXBvc2l0b3J5KTtcbiAgICAgICAgdGhpcy5iaW5kKCdyZXBvc2l0b3JpZXMuUm9sZVJlcG9zaXRvcnknKS50b0NsYXNzKFJvbGVSZXBvc2l0b3J5KTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZShNeVNlcXVlbmNlKTtcblxuICAgIH1cblxuICAgIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBhd2FpdCBzdXBlci5zdGFydCgpO1xuICAgICAgICAvLyB0aGlzLmluaXQodGhpcy5nZXRTeW5jKCdyZXBvc2l0b3JpZXMuVXNlclJlcG9zaXRvcnknKSxcbiAgICAgICAgLy8gICAgIHRoaXMuZ2V0U3luYygncmVwb3NpdG9yaWVzLlVzZXJSb2xlUmVwb3NpdG9yeScpLFxuICAgICAgICAvLyAgICAgdGhpcy5nZXRTeW5jKCdyZXBvc2l0b3JpZXMuUm9sZVJlcG9zaXRvcnknKVxuICAgICAgICAvLyAgICAgKTtcbiAgICB9XG5cbiAgICBpbml0KHVzZXJSZXBvc2l0b3J5OlVzZXJSZXBvc2l0b3J5LCB1c2VyUm9sZVJlcG9zaXRvcnk6VXNlclJvbGVSZXBvc2l0b3J5LCByb2xlUmVwb3NpdG9yeTpSb2xlUmVwb3NpdG9yeSkge1xuXG4gICAgICAgIHVzZXJSZXBvc2l0b3J5LmNyZWF0ZSh7XG4gICAgICAgICAgICBhdXRoX2RhdGU6IDE1NTg2MTQ5ODIsXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiBcIlRlbGVnYVwiLFxuICAgICAgICAgICAgaGFzaDogXCJmOTdkZDVlZWJjMDAyMjQ5ZjNiYWJmNDNkOGUxNDg1ZWI2NzZkNjdmMzI5NzkzN2RkZmJjM2UzNjQzYWNhOTRmXCIsXG4gICAgICAgICAgICBpZDogNDUzOTY0NTEzLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiBcIkVsZXRhZ1wiLFxuICAgICAgICAgICAgcGhvdG9fdXJsOiBcImh0dHBzOi8vdC5tZS9pL3VzZXJwaWMvMzIwL2VsZXRhZy5qcGdcIixcbiAgICAgICAgICAgIHVzZXJuYW1lOiBcImVsZXRhZ1wiXG4gICAgICAgIH0pLnRoZW4oKHVzZXI6VXNlcikgPT4ge1xuICAgICAgICAgICAgcm9sZVJlcG9zaXRvcnkuY3JlYXRlKHtpZDonQURNSU4nLCBkZXNjcmlwdGlvbjogXCJhZG1pblwifSkudGhlbigocm9sZSkgPT4ge1xuICAgICAgICAgICAgICAgIHVzZXJSb2xlUmVwb3NpdG9yeS5jcmVhdGUoe3VzZXJJZDp1c2VyLmlkLCByb2xlSWQ6IHJvbGUuaWR9KS50aGVuKChzdWNjZXNzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0pXG4gICAgfVxufSJdfQ==