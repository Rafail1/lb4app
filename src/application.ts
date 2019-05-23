import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
    RestExplorerBindings,
    RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import * as path from 'path';
import {MySequence} from './sequence';
import {UserRepository, UserRoleRepository, RoleRepository} from './repositories';
import {User} from "./models";

export class KerzachiApplication extends BootMixin(
    ServiceMixin(RepositoryMixin(RestApplication)),
) {
    constructor(options: ApplicationConfig = {}) {
        super(options);
        this.static('/', path.join(__dirname, '../public'));
        this.bind(RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.sequence(MySequence);
        this.component(RestExplorerComponent);
        this.projectRoot = __dirname;
        this.bind('repositories.UserRepository').toClass(UserRepository);
        this.bind('repositories.UserRoleRepository').toClass(UserRoleRepository);
        this.bind('repositories.RoleRepository').toClass(RoleRepository);
    }

    async start() {
        await super.start();
        this.init(this.getSync('repositories.UserRepository'),
            this.getSync('repositories.UserRoleRepository'),
            this.getSync('repositories.RoleRepository')
            );
    }

    init(userRepository:UserRepository, userRoleRepository:UserRoleRepository, roleRepository:RoleRepository) {
        userRepository.create({
            auth_date: 1558614982,
            first_name: "Telega",
            hash: "f97dd5eebc002249f3babf43d8e1485eb676d67f3297937ddfbc3e3643aca94f",
            id: 453964513,
            last_name: "Eletag",
            photo_url: "https://t.me/i/userpic/320/eletag.jpg",
            username: "eletag"
        }).then((user:User) => {
            roleRepository.create({id:'ADMIN', description: "admin"}).then((role) => {
                userRoleRepository.create({userId:user.id, roleId: role.id}).then((success) => {
                    console.log(success);
                })
            })
        }, error => {
            return;
        })
    }
}