import { post, requestBody, HttpErrors } from '@loopback/rest';
import { UserRepository, UserRoleRepository } from '../repositories';
import { repository } from '@loopback/repository';
import { User } from "../models";
import { Credentials } from "../telegram-authorization";

export class UserController {
    constructor(
        @repository(UserRepository) private userRepository: UserRepository,
        @repository(UserRoleRepository) private userRoleRepository: UserRoleRepository,
    ) {
    }


    @post('/users/authenticate')
    async authenticate(@requestBody() user: User) {
        if (!this.userRepository.checkUser(user)) {
            throw new HttpErrors.BadRequest('Bad User');
        }
        const existUser = await this.userRepository.findOne({ where: { id: user.id } });
        if (existUser) {
            delete user.hash;
            await this.userRepository.updateById(existUser.id, user);
            const roles = await this.userRoleRepository.find({ where: { user: user.id } });
            const { first_name, photo_url, last_name, username } = user;
            return {
                token: existUser.hash,
                first_name, last_name, photo_url, username,
                roles: roles.map(r => r.role)
            };
        } else {
            this.userRepository.create(user).then((createdUser: User) => {
                const { first_name, photo_url, last_name, username } = createdUser;
                return {
                    token: createdUser.hash,
                    first_name, last_name, photo_url, username,
                    roles: []
                };
            }, error => {
                console.error(error);
                throw new HttpErrors.BadRequest('Bad User');
            })
        }
        return;
    }

    @post('/users/authenticateByHash')
    async loginByHash(@requestBody() credentials: Credentials) {
        console.log(credentials.hash);
        const user = await this.userRepository.findOne({ where: { hash: credentials.hash } });
        if (!user) throw new HttpErrors.Unauthorized('Invalid credentials');
        const roles = await this.userRoleRepository.find({ where: { user: user.id } });
        const { first_name, photo_url, last_name, username } = user;

        return {
            token: credentials.hash,
            first_name, last_name, photo_url, username,
            roles: roles.map(r => r.role)
        };
    }
}
