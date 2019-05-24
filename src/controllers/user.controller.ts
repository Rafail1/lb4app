import {post, requestBody, HttpErrors} from '@loopback/rest';
import {UserRepository, UserRoleRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {Credentials} from "../providers/auth-strategy.provider";
import {User} from "../models";

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
  @post('/users/register')
  async register(@requestBody() user: User) {
    if(!this.userRepository.checkUser(user)) {
      throw new HttpErrors.BadRequest('Bad User');
    }
    const userExist = await this.userRepository.count({id: user.id});
    if (userExist) throw new HttpErrors.Unauthorized('User Exist');
    return;
  }

}
