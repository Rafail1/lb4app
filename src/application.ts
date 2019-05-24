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
import * as crypto from 'crypto';
import {AuthenticationBindings} from "@loopback/authentication";
import {MyAuthStrategyProvider} from "./providers/auth-strategy.provider";
import {MyAuthActionProvider, MyAuthBindings} from "./providers/auth-action.provider";
import {MyAuthMetadataProvider} from "./providers/auth-metadata.provider";
export class KerzachiApplication extends BootMixin(
    ServiceMixin(RepositoryMixin(RestApplication)),
) {
    constructor(options: ApplicationConfig = {}) {
        super(options);
        this.static('/', path.join(__dirname, '../public'));
        this.bind(RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.bind(AuthenticationBindings.METADATA).toProvider(MyAuthMetadataProvider);
        this.bind(MyAuthBindings.STRATEGY).toProvider(MyAuthStrategyProvider);
        this.bind(AuthenticationBindings.AUTH_ACTION).toProvider(MyAuthActionProvider);
        this.component(RestExplorerComponent);
        this.bind(AuthenticationBindings.STRATEGY).toProvider(
            MyAuthStrategyProvider,
        );
        this.projectRoot = __dirname;

        this.bind('repositories.UserRepository').toClass(UserRepository);
        this.bind('repositories.UserRoleRepository').toClass(UserRoleRepository);
        this.bind('repositories.RoleRepository').toClass(RoleRepository);
        this.sequence(MySequence);

    }

    async start() {
        await super.start();
        console.log(this.checkUser(new User({
            auth_date: 1558614982,
            first_name: "Telega",
            hash: "f97dd5eebc002249f3babf43d8e1485eb676d67f3297937ddfbc3e3643aca94f",
            id: 453964513,
            last_name: "Eletag",
            photo_url: "https://t.me/i/userpic/320/eletag.jpg",
            username: "eletag"
        })));
        // this.init(this.getSync('repositories.UserRepository'),
        //     this.getSync('repositories.UserRoleRepository'),
        //     this.getSync('repositories.RoleRepository')
        //     );
    }
checkUser(user:User){
    const checkHash = user.hash;
    delete user.hash;
    let data_check_string ='';
    Object.keys(user).sort().forEach((key) => {
        // @ts-ignore
        data_check_string += key+'='+user[key] + '\n';
    });
    data_check_string = data_check_string.slice(0, data_check_string.length - 1);
    const secret_key = crypto.createHash('sha256').update('700198718:AAF9wDFELMBDNlIioQnoPrHq6XbbvAay5CA', 'utf8').digest();
    const hmac = crypto.createHmac('sha256', secret_key);
    const hmu = hmac.update(data_check_string);
    const hash = hmu.digest('hex');
    return hash === checkHash;
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