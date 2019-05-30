import {post, requestBody, HttpErrors} from '@loopback/rest';
import {UserRepository, UserRoleRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {Credentials} from "../providers/auth-strategy.provider";
import {User} from "../models";
import * as crypto from "crypto";

export class UserController {
  constructor(
      @repository(UserRepository) private userRepository: UserRepository,
      @repository(UserRoleRepository) private userRoleRepository: UserRoleRepository,
  ) {}

  checkUser(user: User) {
      const checkHash = user.hash;
      let data_check_string = '';
      Object.keys(user).sort().forEach((key) => {
          if(key === 'hash') return;
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

  @post('/users/authenticate')
  async authenticate(@requestBody() user: User) {
    if(!this.checkUser(user)) {
      throw new HttpErrors.BadRequest('Bad User');
    }
    const existUser = await this.userRepository.findOne({where:{id: user.id}});
    if (existUser) {
      await this.userRepository.updateById(existUser.id, user);
      const roles = await this.userRoleRepository.find({where: {userId: user.id}});
      const {first_name, photo_url, last_name, username} = user;
      return {
        token:user.hash,
        first_name, last_name,photo_url, username,
        roles: roles.map(r => r.roleId)
      };
    } else {
      this.userRepository.create(user).then((createdUser:User) => {
        const {first_name, photo_url, last_name, username} = createdUser;
        return {
          token:createdUser.hash,
          first_name, last_name,photo_url, username,
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
