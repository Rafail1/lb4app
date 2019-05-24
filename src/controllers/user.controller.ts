import {post, requestBody, HttpErrors} from '@loopback/rest';
import {UserRepository, UserRoleRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {Credentials} from "../providers/auth-strategy.provider";

export class UserController {
  constructor(
      @repository(UserRepository) private userRepository: UserRepository,
      @repository(UserRoleRepository) private userRoleRepository: UserRoleRepository,
  ) {}

  @post('/users/login')
  async login(@requestBody() credentials: Credentials) {
    console.log(credentials.hash);
    const user = await this.userRepository.findOne({where: {hash: credentials.hash}});
    if (!user) throw new HttpErrors.Unauthorized('Invalid credentials');
    const roles = await this.userRoleRepository.find({where: {userId: user.id}});
    const {first_name, photo_url, last_name, username} = user;

    return {
      token:credentials.hash,
      first_name, last_name,photo_url, username,
      roles: roles.map(r => r.roleId)
    };
  }
}